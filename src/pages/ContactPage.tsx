import { useEffect } from 'react';
import { setSeoMeta } from '../lib/seo';
import { IoIosMail } from 'react-icons/io';

export default function ContactPage() {
  useEffect(() => {
    setSeoMeta({ title: 'Kontak', description: 'Hubungi redaksi 352.IDN.' });
  }, []);

  return (
    <div className="mx-auto max-w-[760px] px-4 py-12">
      <h1 className="text-3xl font-extrabold text-text mb-6">Kontak</h1>
      <div className="space-y-6 text-text-secondary leading-relaxed">
        <div className="flex items-start gap-4 rounded-lg border border-border p-6">
          <IoIosMail className="h-6 w-6 text-primary mt-0.5 shrink-0" />
          <div>
            <h2 className="text-lg font-bold text-text">Email Umum</h2>
            <a
              href="mailto:info@352.idn"
              className="text-primary hover:underline"
            >
              info@352.idn
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded-lg border border-border p-6">
          <IoIosMail className="h-6 w-6 text-primary mt-0.5 shrink-0" />
          <div>
            <h2 className="text-lg font-bold text-text">Email Redaksi</h2>
            <a
              href="mailto:redaksi@352.idn"
              className="text-primary hover:underline"
            >
              redaksi@352.idn
            </a>
          </div>
        </div>
        <div className="rounded-lg border border-border p-6">
          <h2 className="text-lg font-bold text-text mb-2">Kerja Sama</h2>
          <p>
            Untuk kerja sama iklan, sponsor, dan kemitraan lainnya, silakan
            hubungi melalui email di atas.
          </p>
        </div>
      </div>
    </div>
  );
}
