import csv, json, os

# This script was copied from the following youtube tutorial:
# https://www.youtube.com/watch?v=La6ZO8vu-1w&t=185s&ab_channel=ProProgramming101

print(os.getcwd())

csvFilePath = "Lab1-pokemon-data.csv"
jsonFilePath = "pokemon-data.json"

data = {}
with open(csvFilePath) as csvfile:
    csvReader = csv.DictReader(csvfile)
    for csvRow in csvReader:
        name = csvRow["Name"]
        data[name] = csvRow

with open(jsonFilePath, "w") as jsonFile:
    jsonFile.write(json.dumps(data, indent=4))