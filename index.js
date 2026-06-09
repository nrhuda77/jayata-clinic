export default function handler(req, res) {
    res.status(200).json([
        {
            id: 1,
            tanggal: "2026-01-01",
            nama: "Tahun Baru Masehi"
        },
        {
            id: 2,
            tanggal: "2026-01-29",
            nama: "Tahun Baru Imlek"
        }
    ]);
}
