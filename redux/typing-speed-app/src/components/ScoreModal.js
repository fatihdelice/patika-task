import React from 'react';
import { useSelector } from 'react-redux';

export default function ScoreModal() {
    const isFinish = useSelector(state => state.words.isFinish)
    const correct = useSelector(state => state.words.correct)
    const inCorrect = useSelector(state => state.words.inCorrect)
    const ticknumb = useSelector(state => state.words.ticknumb)
    const inCorTick = useSelector(state => state.words.inCorTick)
    const corTick = useSelector(state => state.words.corTick)

    return (
        <>
            {
                isFinish && <div className="score_table">
                    <h3>Result</h3>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td id="wpm" className="name" colspan="2" title="Words per Minute: 1 word equals 5 keystrokes">
                                    <strong>{correct * 5 - inCorrect * 2} WPM</strong>
                                    <small>(words per minute)</small>
                                </td>
                            </tr>
                            <tr id="keystrokes">
                                <td className="name">Keystrokes</td>
                                <td className="value">
                                    <small>
                                        (<span className="correct">{corTick}</span> | <span className="wrong">{inCorTick}</span>)
                                    </small>
                                    &nbsp;{ticknumb}
                                </td>
                            </tr>
                            <tr id="accuracy">
                                <td className="name">Accuracy</td>
                                <td className="value">
                                    <strong>{Math.round((correct * 100) / (correct + inCorrect))}%</strong>
                                </td>
                            </tr>
                            <tr id="correct">
                                <td className="name">Correct words</td>
                                <td className="value">
                                    <strong>{correct}</strong>
                                </td>
                            </tr>
                            <tr id="wrong">
                                <td className="name">Wrong words</td>
                                <td className="value">
                                    <strong>{inCorrect}</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            }


        </>
    )
}
