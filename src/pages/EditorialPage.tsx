import { useEffect } from 'react'
import { setSeoMeta } from '../lib/seo'

export default function EditorialPage() {
  useEffect(() => {
    setSeoMeta({ title: 'Redaksi', description: 'Prinsip editorial dan struktur redaksi 352.IDN.' })
  }, [])

  return (
    <div className="mx-auto max-w-[760px] px-4 py-12">
      <h1 className="text-3xl font-extrabold text-text mb-6">Redaksi</h1>
      <div className="space-y-4 text-text-secondary leading-relaxed">
        <h2 className="text-xl font-bold text-text">Prinsip Editorial</h2>
        <p>
          352.IDN berkomitmen menyajikan berita yang akurat, berimbang, dan dapat dipertanggungjawabkan.
          Setiap berita melalui proses verifikasi sebelum dipublikasikan.
        </p>
        <h2 className="text-xl font-bold text-text mt-8">Standar Koreksi</h2>
        <p>
          Jika terdapat kesalahan dalam pemberitaan, redaksi akan segera melakukan koreksi
          dan mencantumkan pemberitahuan koreksi pada artikel terkait.
        </p>
        <h2 className="text-xl font-bold text-text mt-8">Sumber Berita</h2>
        <p>
          Berita bersumber dari liputan langsung, konferensi pers, rilis resmi federasi,
          dan sumber terpercaya lainnya.
        </p>
        <h2 className="text-xl font-bold text-text mt-8">Kontak Redaksi</h2>
        <p>
          Untuk pertanyaan terkait editorial, silakan hubungi kami melalui halaman
          <a href="/kontak" className="text-primary ml-1 hover:underline">Kontak</a>.
        </p>
      </div>
    </div>
  )
}
