const Writer = require('./Writer')
const Reader = require('./Reader')
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const PDFWriter = require('./PDFWriter')

const reader = new Reader()
const writer = new Writer()



async function main(){
    
    const data = await reader.Read("./users.csv")
    
    const processData = Processor.Process(data)

    const users = new Table(processData)

    const html = await HtmlParser.Parse(users)

    writer.Write(Date.now() + ".html", html)

    PDFWriter.WritePDF(Date.now() + ".pdf", html)

}

main()