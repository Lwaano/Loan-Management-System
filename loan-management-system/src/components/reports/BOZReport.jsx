import { PDFDownloadLink } from '@react-pdf/renderer'
import BozReportPDF from './BozReportPDF'

export default function BOZReport() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Bank of Zambia Compliance Reports</h2>
      
      <PDFDownloadLink 
        document={<BozReportPDF />} 
        fileName="boz-report.pdf"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
      >
        {({ loading }) => (loading ? 'Generating...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  )
}