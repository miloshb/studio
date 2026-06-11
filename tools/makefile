# ============================================
# Combined Makefile: Schedule + Image Optimize
# ============================================

# --------------------------------------------
# Schedule-Grid image pipeline
# --------------------------------------------

INPUT_XPS = ../src/images/classes/Schedule.xps
BASE = Schedule
TRIM = $(BASE)-trim.png
SCALED = $(BASE)-1080.png
DEST = ../public/images/classes/studio-sun-and-sea-weekly-schedule
FINAL = $(DEST).png
A5 = $(DEST)-A5.png
CHECKSUM = .schedule.sha256

all: schedule optimize

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

clean:
	rm -f $(BASE)-1.png $(TRIM) $(SCALED) $(FINAL) $(A5)

.PHONY: all clean check
