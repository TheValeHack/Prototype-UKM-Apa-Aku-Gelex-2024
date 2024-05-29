export interface UKM {
    id: number,
    nama: string,
    totalBobot: number,
    logo:  string
}

export interface BobotJawaban {
    tipe: "agree" | "netral" | "disagree",
    bobot: number
}

export interface Jawaban {
    ukmId: number,
    daftarJawaban: BobotJawaban[] 
}

export interface Pertanyaan {
    id: number,
    pertanyaan: string,
    jawaban: Jawaban[]
}

export const dataUKM: UKM[] = [
    {
        id: 1,
        nama: "Tenis Meja",
        totalBobot: 0,
        logo: "https://tenismeja.ukm.ugm.ac.id/wp-content/uploads/sites/835/2019/04/Logo-UKM-Tenis-Meja.jpg"
    },
    {
        id: 2,
        nama: "Chess Team UGM",
        totalBobot: 0,
        logo: "https://media.licdn.com/dms/image/D560BAQF44_tuvXXocQ/company-logo_200_200/0/1692946013552?e=2147483647&v=beta&t=EjrA5v8zTcXUN7Y9ENUhkFHNqCwvwRQLCnI-ogFkFS8"
    },
    {
        id: 3,
        nama: "Seni Rupa",
        totalBobot: 0,
        logo: "https://ugc.production.linktr.ee/f96d8d21-e2ff-4b02-8673-b39081f990ca_logo.png?io=true&size=avatar-v3_0"
    },
    {
        id: 4,
        nama: "Kesenian Jawa Gaya Surakarta",
        totalBobot: 0,
        logo: "https://www.balairungpress.com/wp-content/uploads/2013/04/UKJGS.jpg"
    },
    {
        id: 5,
        nama: "Arjuna Electric Vehicle UGM",
        totalBobot: 0,
        logo: "https://media.licdn.com/dms/image/D560BAQFz8cPJh6NXig/company-logo_200_200/0/1686411396904/arjuna_ev_ugm_logo?e=2147483647&v=beta&t=OQC8Nrk-N-Bx-OUJZObFzpVaOadqVwH3rZdNi_1BmYw"
    }
]

export const dataPertanyaan: Pertanyaan[] = [
    {
        id: 1,
        pertanyaan: "Apakah kamu suka kegiatan yang mengandalkan otak kanan daripada otak kiri?",
        jawaban: [
            {
                ukmId: 1,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: -1
                    },
                    {
                        tipe: "netral",
                        bobot: 1
                    },
                    {
                        tipe: "disagree",
                        bobot: 3
                    },
                ]
            },
            {
                ukmId: 2,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: 0
                    },
                    {
                        tipe: "netral",
                        bobot: 1
                    },
                    {
                        tipe: "disagree",
                        bobot: 2
                    },
                ]
            },
            {
                ukmId: 3,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: 1
                    },
                    {
                        tipe: "netral",
                        bobot: 0
                    },
                    {
                        tipe: "disagree",
                        bobot: 0
                    },
                ]
            },
            {
                ukmId: 4,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: 1
                    },
                    {
                        tipe: "netral",
                        bobot: 0
                    },
                    {
                        tipe: "disagree",
                        bobot: 0
                    },
                ]
            },
            {
                ukmId: 5,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: 0
                    },
                    {
                        tipe: "netral",
                        bobot: 0
                    },
                    {
                        tipe: "disagree",
                        bobot: 1
                    },
                ]
            }
        ]
    },

    {
        id: 2,
        pertanyaan: "Apakah kamu suka kegiatan yang mengandalkan gerakan fisik?",
        jawaban: [
            {
                ukmId: 1,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: 3
                    },
                    {
                        tipe: "netral",
                        bobot: 1
                    },
                    {
                        tipe: "disagree",
                        bobot: -1
                    },
                ]
            },
            {
                ukmId: 2,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: 0
                    },
                    {
                        tipe: "netral",
                        bobot: 1
                    },
                    {
                        tipe: "disagree",
                        bobot: 3
                    },
                ]
            },
            {
                ukmId: 3,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: 0
                    },
                    {
                        tipe: "netral",
                        bobot: 0
                    },
                    {
                        tipe: "disagree",
                        bobot: 0
                    },
                ]
            },
            {
                ukmId: 4,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: 3
                    },
                    {
                        tipe: "netral",
                        bobot: 1
                    },
                    {
                        tipe: "disagree",
                        bobot: -2
                    },
                ]
            },
            {
                ukmId: 5,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: 1
                    },
                    {
                        tipe: "netral",
                        bobot: 0
                    },
                    {
                        tipe: "disagree",
                        bobot: 0
                    },
                ]
            }
        ]
    },

    {
        id: 3,
        pertanyaan: "Apakah kamu suka dengan nuansa yang lebih modern daripada klasik?",
        jawaban: [
            {
                ukmId: 1,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: 2
                    },
                    {
                        tipe: "netral",
                        bobot: 1
                    },
                    {
                        tipe: "disagree",
                        bobot: 0
                    },
                ]
            },
            {
                ukmId: 2,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: 1
                    },
                    {
                        tipe: "netral",
                        bobot: 0
                    },
                    {
                        tipe: "disagree",
                        bobot: 1
                    },
                ]
            },
            {
                ukmId: 3,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: 0
                    },
                    {
                        tipe: "netral",
                        bobot: 0
                    },
                    {
                        tipe: "disagree",
                        bobot: 0
                    },
                ]
            },
            {
                ukmId: 4,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: -2
                    },
                    {
                        tipe: "netral",
                        bobot: -1
                    },
                    {
                        tipe: "disagree",
                        bobot: 1
                    },
                ]
            },
            {
                ukmId: 5,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: 3
                    },
                    {
                        tipe: "netral",
                        bobot: 1
                    },
                    {
                        tipe: "disagree",
                        bobot: -1
                    },
                ]
            }
        ]
    },

    {
        id: 4,
        pertanyaan: "Apakah kamu lebih sering menggunakan alat-alat elektronik daripada alat-alat klasik?",
        jawaban: [
            {
                ukmId: 1,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: -1
                    },
                    {
                        tipe: "netral",
                        bobot: 0
                    },
                    {
                        tipe: "disagree",
                        bobot: 1
                    },
                ]
            },
            {
                ukmId: 2,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: 1
                    },
                    {
                        tipe: "netral",
                        bobot: 0
                    },
                    {
                        tipe: "disagree",
                        bobot: 1
                    },
                ]
            },
            {
                ukmId: 3,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: 0
                    },
                    {
                        tipe: "netral",
                        bobot: 0
                    },
                    {
                        tipe: "disagree",
                        bobot: 0
                    },
                ]
            },
            {
                ukmId: 4,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: 0
                    },
                    {
                        tipe: "netral",
                        bobot: 0
                    },
                    {
                        tipe: "disagree",
                        bobot: 1
                    },
                ]
            },
            {
                ukmId: 5,
                daftarJawaban: [
                    {
                        tipe: "agree",
                        bobot: 4
                    },
                    {
                        tipe: "netral",
                        bobot: 1
                    },
                    {
                        tipe: "disagree",
                        bobot: -2
                    },
                ]
            }
        ]
    }
]