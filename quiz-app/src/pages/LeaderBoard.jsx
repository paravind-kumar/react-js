import { useState, useEffect } from "react"

function LeaderBoard() {
    const [data, setdata] = useState([])

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("leadgerboard")) || []
        setdata(stored)
    }, [])

    const clearBoard = () => {
        localStorage.removeItem("leadgerboard")
        setdata([])
    }

  return (
    <div className="container text-center py-5">
        <h2 className="fw-bold mb-4">🏆 Leaderboard</h2>
        {data.length === 0 ? (<p className="text-muted">No Scores yet! Play the quiz.</p>) : (
            <table className="table table-striped shadow">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Percentage</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{entry.name}</td>
                            <td>{entry.score}</td>
                            <td>{entry.percentage}%</td>
                            <td>{entry.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
        <button 
            onClick={clearBoard}
            className="btn btn-danger mt-3">
        Clear Leaderboard
        </button>
    </div>
  )
}

export default LeaderBoard