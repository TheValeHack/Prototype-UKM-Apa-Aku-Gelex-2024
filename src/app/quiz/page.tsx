"use client"

import { dataPertanyaan, Pertanyaan, UKM } from "@/data/data"
import calculateHasil from "@/util/calculateHasil";
import { useState } from "react"
import UKMRanking from "@/components/quiz/UKMRanking";
import Questions from "@/components/quiz/Questions";

export default function Quiz(){
    const [daftarJawaban, setDaftarJawaban] = useState<DaftarJawaban>({});
    const [currentQuestion, setCurrentQuestion] = useState<number>(1)
    const [message, setMessage] = useState<string>('')
    const [isDone, setIsDone] = useState<boolean>(false)
    const [rankingUKM, setRankingUKM] = useState<UKM[]>([])

    const handleChange = (questionId: number, jawabanTipe: string) => {
        setDaftarJawaban({
          ...daftarJawaban,
          [questionId]: jawabanTipe,
        })
      }
    const handleNext = () => {
        let question: Pertanyaan = dataPertanyaan[currentQuestion-1]
        if(daftarJawaban.hasOwnProperty(question.id)){
            if (currentQuestion < dataPertanyaan.length) {
                setMessage('')
                setCurrentQuestion(currentQuestion + 1)
            }
        } else {
            setMessage('Pilih salah satu jawaban!')
        }
    }

    const handlePrevious = () => {
        if (currentQuestion > 1) {
            setCurrentQuestion(currentQuestion - 1)
            setMessage('')
        }
    }
    const handleReset = () => {
        setDaftarJawaban({})
        setCurrentQuestion(1)
        setRankingUKM([])
        setIsDone(false)
    }

    const handleSubmit = () => {
        let question: Pertanyaan = dataPertanyaan[currentQuestion-1]
        if(daftarJawaban.hasOwnProperty(question.id)){
            if (currentQuestion === dataPertanyaan.length) {
                setMessage('')
                const hasilKalkulasi: UKM[] = calculateHasil(daftarJawaban)
                setRankingUKM(hasilKalkulasi)
                setIsDone(true)
            }
        } else {
            setMessage('Pilih salah satu jawaban!')
        }
    }

    return (
        <div className="w-[100%] min-h-[100vh] flex justify-center items-center px-10">
            <div className="bg-white p-10 rounded-xl w-[100%] md:w-[650px]  drop-shadow-xl">
                <div id="pertanyaan" className={isDone ? 'hidden' : 'block'}>
                    <p className="text-slate-500 mb-1 text-sm">Pertanyaan {currentQuestion}</p>
                    <p className="font-bold text-lg text-black">{dataPertanyaan[currentQuestion-1].pertanyaan}</p>
                    <p className="text-red-600 text-sm mt-1">{message}</p>
                    <Questions currentQuestion={currentQuestion} daftarJawaban={daftarJawaban} handleChange={handleChange} />

                    <div className="flex justify-between">
                        {
                            currentQuestion > 1 ? (
                                <button onClick={handlePrevious} className="font-semibold mt-7 px-6 py-3 rounded-xl bg-[#ee5a5a] text-white flex transition-all hover:bg-[#fc6f6f] hover:translate-y-[-2px]">
                                Previous
                                </button>
                            ) : <div></div>
                        }
                        {currentQuestion < dataPertanyaan.length ? (
                            <button onClick={handleNext} className="font-semibold mt-7 px-6 py-3 rounded-xl bg-[#ee5a5a] text-white flex transition-all hover:bg-[#fc6f6f] hover:translate-y-[-2px]">
                            Next
                            </button>
                        ) : (
                            <button onClick={handleSubmit} className="font-semibold mt-7 px-6 py-3 rounded-xl bg-[#ee5a5a] text-white flex transition-all hover:bg-[#fc6f6f] hover:translate-y-[-2px]">
                            Submit
                            </button>
                        )}
                    </div>
                </div>
                <div id="hasil" className={isDone ? 'block' : 'hidden'}>
                    <UKMRanking rankingUKM={rankingUKM} handleReset={handleReset} />
                </div>
            </div>
        </div>
    )
}

type DaftarJawaban = { [key: number]: string }