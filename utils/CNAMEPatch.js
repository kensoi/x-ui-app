const fs = require("fs")

const path = "./build/CNAME"
const content = "miuruwa.ru"

var writeStream = fs.createWriteStream(path)
writeStream.write(content)
writeStream.end()