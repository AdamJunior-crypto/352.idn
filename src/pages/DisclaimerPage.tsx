import { useEffect } from 'react'
import { setSeoMeta } from '../lib/seo'

export default function DisclaimerPage() {
  useEffect(() => {
    setSeoMeta({ title: 'Disclaimer', description: 'Disclaimer 352.IDN.' })
  }, [])

  return (
    <div className="mx-auto max-w-[760px] px-4 py-12">
      <h1 className="text-3xl font-extrabold text-text mb-6">Disclaimer</h1>
      <div className="space-y-4 text-text-secondary leading-relaxed">
        <h2 className="text-xl font-bold text-text">Akurasi Informasi</h2>
        <p>352.IDN berusaha menyajikan informasi yang akurat dan terkini. Namun, kami tidak menjamin kebenaran absolut dari setiap informasi yang dipublikasikan.</p>
        <h2 className="text-xl font-bold text-text mt-8">Pembaruan Berita</h2>
        <p>Berita dapat diperbarui seiring perkembangan informasi. Tanggal pembaruan akan dicantumkan pada artikel yang diperbarui.</p>
        <h2 className="text-xl font-bold text-text mt-8">External Links</h2>
        <p>352.IDN dapat memuat tautan ke website eksternal. Kami tidak bertanggung jawab atas konten yang terdapat pada website pihak ketiga.</p>
        <h2 className="text-xl font-bold text-text mt-8">Third-Party Services</h2>
        <p>Data skor dan jadwal pertandingan dapat bersumber dari layanan pihak ketiga. Keakuratan data tersebut bergantung pada penyedia layanan.</p>
      </div>
    </div>
  )
}
