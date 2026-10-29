# ===================================================
# Combined Makefile: Schedule + Image Optimize + Logo
# ===================================================

# Print usage before any target
$(info Usage: make <target>)
$(info Targets: schedule optimize logo [favicons] all clean cleanall)
$(info --------------------------------------------------)
$(info	 schedule	- build Weekly Rhytm PNG)
$(info	 optimize	- /src JPG optimized -> /public WebP)
$(info	 logo    	- build the Logo with Name)
$(info	 favicons	- build favicons - not part of target all)
$(info	 )
$(info make -B <target> = force build <target>)
$(info --------------------------------------------------)

# Directories
BUILD_DIR := ../build
$(shell mkdir -p $(BUILD_DIR))



# --------------------------------------------
# Schedule-Grid image pipeline
# --------------------------------------------

INPUT_XPS = ../src/images/classes/Schedule.xps
BASE = $(BUILD_DIR)/Schedule
TRIM = $(BASE)-trim.png
SCALED = $(BASE)-1080.png
DEST = ../public/images/classes/studio-sun-and-sea-weekly-schedule
FINAL = $(DEST).png
A5 = $(DEST)-A5.png
CHECKSUM = $(BUILD_DIR)/.schedule.sha256

all: schedule optimize logo

# --- Checksum dependency ---
$(CHECKSUM): $(INPUT_XPS)
	@echo "Updating checksum…"
	@sha256sum $(INPUT_XPS) > $(CHECKSUM)

# --- Build schedule images only when checksum changes ---
$(BASE)-1.png: $(INPUT_XPS)
	xpstopng $(INPUT_XPS) $(BASE)

$(TRIM): $(BASE)-1.png
	convert $(BASE)-1.png -trim +repage $(TRIM)

$(SCALED): $(TRIM)
	convert $(TRIM) -scale 1080 $(SCALED)

$(FINAL): $(CHECKSUM) $(SCALED)
	@height=$$(identify -format "%h" $(SCALED)); \
	if [ $$height -lt 680 ]; then \
		echo "Error: Height $$height < 680px"; exit 1; \
	fi; \
	convert $(SCALED) +repage -gravity south -crop 1080x680+0+0 $(FINAL)
	@echo "Generated $(FINAL)"

$(A5): $(CHECKSUM) $(TRIM)
	# A5 landscape at 300dpi = 2480x1748 px
	convert $(TRIM) -resize 2480 -gravity north -extent 2480x1748 $(A5)
	@echo "Generated $(A5)"

schedule: $(FINAL) $(A5)



# --------------------------------------------
# General JPEG optimization pipeline
# --------------------------------------------

SRC_IMG_DIR = ../src/images
PUB_IMG_DIR = ../public/images

# Find all JPGs under src/images
SRC_JPGS := $(shell find $(SRC_IMG_DIR) -type f -iname '*.jpg')

# Map each JPG to 3 WebP outputs
OPT_1600 := $(patsubst $(SRC_IMG_DIR)/%.jpg,$(PUB_IMG_DIR)/%-1600.webp,$(SRC_JPGS))
OPT_1080 := $(patsubst $(SRC_IMG_DIR)/%.jpg,$(PUB_IMG_DIR)/%-1080.webp,$(SRC_JPGS))
OPT_400	:= $(patsubst $(SRC_IMG_DIR)/%.jpg,$(PUB_IMG_DIR)/%-400.webp,$(SRC_JPGS))

optimize: $(OPT_1600) $(OPT_1080) $(OPT_400)
	@echo "All JPG images optimized."

# Pattern rules for generating WebP variants
$(PUB_IMG_DIR)/%-1600.webp: $(SRC_IMG_DIR)/%.jpg
	@mkdir -p $(dir $@)
	convert $< -resize 1600 -quality 75 $@
	@echo "Generated $@"

$(PUB_IMG_DIR)/%-1080.webp: $(SRC_IMG_DIR)/%.jpg
	@mkdir -p $(dir $@)
	convert $< -resize 1080 -quality 70 $@
	@echo "Generated $@"

$(PUB_IMG_DIR)/%-400.webp: $(SRC_IMG_DIR)/%.jpg
	@mkdir -p $(dir $@)
	convert $< -resize 400 -quality 60 $@
	@echo "Generated $@"



# --------------------------------------------
# Logos with Studio Text
# --------------------------------------------

# MindBody expects 3 logos (of which 2 with name) - and will resize to fit!
#	 1. 200x50px (20pt text)
#	 2. 300x70px (32pt text)
#	 3. 600x600px (logo only)
# Font settings global css (1.5rem = 24px)
# Point = Pixel * 0,75

LOGO_SRC := ../src/assets/studio-sun-and-sea-natarajasana.png
LOGO_DEST := ../public/favicon
LOCKUP=$(LOGO_DEST)/studio-sun-and-sea-logo
FILTER := -filter Lanczos -define filter:blur=0.8

favicons:
	@echo "Generating favicon variants…"
	convert $(LOGO_SRC) $(FILTER) -resize 16x16 $(LOGO_DEST)/favicon-16.png
	convert $(LOGO_SRC) $(FILTER) -resize 32x32 $(LOGO_DEST)/favicon-32.png
	convert $(LOGO_SRC) $(FILTER) -resize 48x48 $(LOGO_DEST)/favicon-48.png
	convert $(LOGO_SRC) $(FILTER) -resize 180x180 $(LOGO_DEST)/apple-touch-icon.png
	convert $(LOGO_SRC) $(FILTER) -resize 192x192 $(LOGO_DEST)/icon-192.png
	convert $(LOGO_SRC) $(FILTER) -resize 512x512 $(LOGO_DEST)/icon-512.png
	convert $(LOGO_SRC) $(FILTER) -resize 600x600 $(LOGO_DEST)/icon-600.png
	convert $(LOGO_SRC) \
		\( -clone 0 -resize 16x16 \) \
		\( -clone 0 -resize 32x32 \) \
		\( -clone 0 -resize 48x48 \) \
		-delete 0 $(LOGO_DEST)/favicon.ico
	@echo "Favicons generated."


FONT := Cormorant-Garamond-Regular
COLOR := \#3A3A3C
BG_COLOR := \#F7EFEA

# Generate PNG Logo+text
# 200x50px Version (High-Res 4x Canvas: 800x200 -> Resampled)
$(LOCKUP)-200.png: $(LOGO_SRC)
	magick -density 288 \
		\( $(LOGO_SRC) -resize x192 \) \
		\( -background none \
			-fill "$(COLOR)" \
			-font "$(FONT)" \
			-pointsize 20 \
			-gravity west \
			label:"Studio Sun & Sea" \
			-splice 32x0 \) \
		-gravity center \
		+append \
		-background none \
		-gravity west \
		-extent 800x200 \
		-resample 72 \
		$@

# 300x70px Version (High-Res 4x Canvas: 1200x280 -> Resampled)
$(LOCKUP)-300.png: $(LOGO_SRC)
	magick -density 288 \
		\( $(LOGO_SRC) -resize x272 \) \
		\( -background none \
			-fill "$(COLOR)" \
			-font "$(FONT)" \
			-pointsize 32 \
			-gravity west \
			label:"Studio Sun & Sea" \
			-splice 32x0 \) \
		-gravity center \
		+append \
		-background none \
		-gravity west \
		-extent 1200x280 \
		-resample 72 \
		$@

# Convenience target
logo: $(LOCKUP)-200.png $(LOCKUP)-300.png
	@echo "Completed $@"



# --------------------------------------------
# Common
# --------------------------------------------

clean:
	rm -Rf $(BUILD_DIR)/*

cleanall: clean
	rm -f $(FINAL) $(A5) $(LOCKUP)-200.png $(LOCKUP)-300.png

.PHONY: all clean check
