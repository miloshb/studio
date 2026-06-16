# ============================================
# Combined Makefile: Schedule + Image Optimize
# ============================================

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
OPT_400  := $(patsubst $(SRC_IMG_DIR)/%.jpg,$(PUB_IMG_DIR)/%-400.webp,$(SRC_JPGS))

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
# Logo with Studio Text
# --------------------------------------------

LOGO_DIR := ../public/favicon
LOGO=$(LOGO_DIR)/favicon-48.png
LOCKUP=$(LOGO_DIR)/studio-sun-and-sea-textlogo.png

# Font settings (1.5rem = 24px)
FONT := Cormorant-Garamond-Regular
COLOR := \#3A3A3C
POINTSIZE := 24

# Generate PNG text
$(LOCKUP): $(LOGO)
	magick $(LOGO) \
		\( -background none \
		  -fill "$(COLOR)" \
		  -font "$(FONT)" \
		  -pointsize $(POINTSIZE) \
		  -gravity west \
		  label:"Studio Sun & Sea" \
		  -splice 8x0 \) \
		-gravity center \
		+append \
		$(LOCKUP)

# Convenience target
logo: $(LOCKUP)
	@echo "Generated: $(LOCKUP)"


# --------------------------------------------
# Common
# --------------------------------------------

clean:
	rm -Rf $(BUILD_DIR)/*

cleanall: clean
	rm -f $(FINAL) $(A5) $(LOCKUP)

.PHONY: all clean check
