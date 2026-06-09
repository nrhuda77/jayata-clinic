export default function handler(req, res) {
    const hariLibur = [
        {
            id: 1,
            tanggal: "2026-01-01",
            nama: "Tahun Baru Masehia"
        },
        {
            id: 2,
            tanggal: "2026-01-29",
            nama: "Tahun Baru Imlek"
        },
        {
            id: 3,
            tanggal: "2026-03-19",
            nama: "Hari Raya Nyepi"
        },
        {
            id: 4,
            tanggal: "2026-03-31",
            nama: "Idul Fitri"
        },
        {
            id: 5,
            tanggal: "2026-04-18",
            nama: "Wafat Isa Almasih"
        },
        {
            id: 6,
            tanggal: "2026-05-01",
            nama: "Hari Buruh Internasional"
        },
        {
            id: 7,
            tanggal: "2026-05-14",
            nama: "Kenaikan Isa Almasih"
        },
        {
            id: 8,
            tanggal: "2026-06-01",
            nama: "Hari Lahir Pancasila"
        },
        {
            id: 9,
            tanggal: "2026-12-25",
            nama: "Hari Raya Natal"
        }
    ];

    res.status(200).json({
        success: true,
        total: hariLibur.length,
        data: hariLibur
    });
}
