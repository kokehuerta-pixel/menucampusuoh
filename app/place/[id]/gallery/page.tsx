import Image from 'next/image';

export default function PlaceGallery() {
  const images = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCMEDz9ilxdS6UENyfKeCQoNI__snYDWnAg6KRABGIKJ1U1bsgC2q7MB1BO2Fm6FPMq6_QnzfD5oLqsWLGWqm8HGnqJagj2S1Ozbx-DifL_FJZ8ft8iFdvBsr2LrM5VbNgDWPzZq2Xk3EjaUtMScb8JLsGyTzwxb66yAKW5x0us4RuJVTsxOWTlS6naPZc0htxQ1DPRIWcaK-4nETK4dbuacxDS6S0tEGSirtuCw33Vz9DUidsZtSETum9LmIta7O6sViYwWTngPTQ',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA0TEOlAK-B3-5KqqgBCfRUxyavyjAsGgph3jdK4hTuXbRFr_ruuBX1Ai_fyoGwfSNjA5Vb3ZyDaW0jHnXg9Sxv4xGnOmw5kd8r2PJB_cER6nFv8tUvvtjLrc80CsgjZ2vir6OasYQED_BOsbQfXPTvuhEuhDkFT_JOSNh3L9xpv7i-VBeAHvpXo9L0NJpAkeKm6llagX9O-kT4aiS3_D0yvLxCOHpZgYg5q9dbuBg5xkDvhLx-3GqzG0gmqGe6nhycVFbBqsdyXns',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCCJskJhTWmZau1Uw-eqLoB-lhwJqhSMihSmIdOzowqRkX6OPzu-ETVYeCbEnDmuWBjnB1MnG665Qrikww60KM77-CiGqNGGnr9ey8t-8tI3RRO_HmSRILi63LX-9FIbAxIb8zeP_lr72LTv4NFtwER18P3cxJ13BraQlXhAxQlttYKh-HuVdBXUZ0wqhiEm29hcFSN_3__KfmMcoRbAcueJ2Jwk6MJZfY2F_6XNZYvXFH1ZyNgv6mtF9SZjANO_PpTPJSbHS1bmhk',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDLdF08TogF5u9m45a5ay_U4Na3xFeAPjWwo-m-mIasE6WFrWeYpMpFlHpUZ_W8syKPF-1etEzzODAPQ2ZCsBTw0JEwghbb1B_MT22f9C7vDCMseKx_rRUeKI8nMgEZbLlgIwCVetg47G_cJJ9A4mNCriHfEAly_UEzm0b-X-ChEx0RMtuUB6knMQN6jSSamTtPtKJ9jYCOt9cdcFTOiZy83X80la29ZGCbiZmVEFFvKPLdWADUVPkxH6HzqHF5bYWQXezIxRIqvuQ',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDT6nMaXqgNvjG2kRVGH5ZiYeDcNKAr6JXleoHxxCRndznXm9awf8N_8EEDN_nZULq7oMSrRGZ_fqOF-E2zFRPD7JrWXG1DbOZ1Rl1Mnle5f1AzGNzNAGSHl2rr0OeWcudNrCcetSW4_e6Pnrf_lfycrp9MaG3DfzcU7VZTvI3AJYve8HiUVxQptT9eM-bv8-bmPTMUg6aBVGvcsbXEOie6aFH-tN1SzxciVVSt5puQ86kt7Ei7WxZvDzquO2i_mi_Hnza_1ERAsFk',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB7sQfJhZRkh6Ygp-rROvYZwDlEI6GOhKtIZbCxMXxN6b40Gdz2JVtnxJf2lqBm4P4YGq7MkI31IB2Wdm2YPKOo7iV0gFvqfv947f55-eUwF33vAiKg99BOfRDRkCaLx7kpPLOY8xlBEYokmZ3oALwSrRo0IEd2bnQu1VTNONr5tAKrqyTV72d7FFe5iSMT1qhNjTZv8Rtjbrfnxhv0PJcQLAS4NLTvW-SclBibcY5Jk7lZ3WVwE4IGCtCMcA0543fJEWxgT64eQsw',
  ];

  return (
    <section className="px-6 relative">
      <div className="columns-2 gap-4 pb-8 space-y-4">
        {images.map((src, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden bg-surface-container-low mb-4 break-inside-avoid">
            <Image src={src} alt="Gallery image" width={300} height={300} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
