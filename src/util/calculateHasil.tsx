import { UKM, dataUKM, dataPertanyaan } from "@/data/data"

function calculateHasil(daftarJawaban: DaftarJawaban): UKM[]{
    const hasil: UKM[] = [...dataUKM] 
    dataPertanyaan.forEach((question) => {
        const jawaban = daftarJawaban[question.id]
        if(jawaban){
            question.jawaban.forEach((answer) => {
                const indexUKM = hasil.findIndex((ukm) => ukm.id === answer.ukmId)
                const bobotJawaban = answer.daftarJawaban.find((ans) => ans.tipe === jawaban)
                hasil[indexUKM].totalBobot += bobotJawaban ? bobotJawaban.bobot : 0
            })
        }
    })

    hasil.sort((a, b) => b.totalBobot - a.totalBobot)

    return hasil
}

export default calculateHasil

type DaftarJawaban = { [key: number]: string }