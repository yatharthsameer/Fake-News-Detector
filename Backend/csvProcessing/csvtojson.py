import json
import csv

# Load the JSON data
with open("allData.json", "r", encoding="utf-8") as json_file:
    json_data = json.load(json_file)

# Prepare a list to store the unmatched story information
unmatched_info = []

# Load the CSV data
with open("images.csv", "r", encoding="utf-8") as csv_file:
    csv_reader = csv.DictReader(csv_file)

    for row in csv_reader:
        story_url = row["Story URL"]
        matched = False

        # Check if the Story_URL in the CSV matches any entry in the JSON
        for key, value in json_data.items():
            if value["Story_URL"] == story_url:
                matched = True
                # Add new image URLs as img2, img3, etc.
                for i in range(1, 16):
                    content_image_key = f"Content Images-{i}"
                    if row[content_image_key]:
                        img_key = f"img{i + 1}"  # img2, img3, etc.
                        json_data[key][img_key] = row[content_image_key]
                break

        if not matched:
            # Store unmatched story information for CSV export
            unmatched_info.append(
                {
                    "Story Date": row["Story Date"],
                    "Story URL": row["Story URL"],
                    "Headline": row["Headline"],
                    "Content Image-1": row["Content Images-1"],
                }
            )

# Save the updated JSON data (without adding new objects for unmatched URLs)
with open("updated_allData.json", "w", encoding="utf-8") as json_file:
    json.dump(json_data, json_file, ensure_ascii=False, indent=4)

# Save unmatched information to a CSV file
if unmatched_info:
    with open("unmatched_stories.csv", "w", encoding="utf-8", newline="") as csvfile:
        fieldnames = ["Story Date", "Story URL", "Headline", "Content Image-1"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        writer.writeheader()
        for info in unmatched_info:
            writer.writerow(info)

    print("Unmatched Story URLs saved to unmatched_stories.csv")
else:
    print("All URLs in the CSV matched with the JSON data.")
