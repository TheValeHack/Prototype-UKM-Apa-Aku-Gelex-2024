import { dataPertanyaan, Pertanyaan } from "@/data/data"

export default function Questions({ currentQuestion, daftarJawaban, handleChange }: { 
    currentQuestion: number, 
    daftarJawaban: DaftarJawaban, 
    handleChange: (questionId: number, jawabanTipe: string) => void 
}){
    return (
        <div>
            {
                dataPertanyaan[currentQuestion-1].jawaban[0].daftarJawaban.map((item, index) => {
                    const question: Pertanyaan = dataPertanyaan[currentQuestion-1]

                    return (
                        <div key={index} className={"border-2 mt-3 p-3 rounded-lg " + (daftarJawaban[question.id] === item.tipe ? 'border-[#ffb730]' : '')} onClick={() => handleChange(question.id, item.tipe)}>
                            <label className="mr-2 text-black">
                            <input
                                className="mr-4 text-black"
                                type="radio"
                                name={`question-${question.id}`}
                                value={item.tipe}
                                checked={daftarJawaban[question.id] === item.tipe}
                                onChange={() => handleChange(question.id, item.tipe)}
                            />
                            {item.tipe.charAt(0).toUpperCase() + item.tipe.slice(1)}
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}

type DaftarJawaban = { [key: number]: string }