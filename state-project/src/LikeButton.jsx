import { useState } from 'react'

function LinkButton() {

    const [liked, setLiked] = useState(false);

  return (
    <>
        <button onClick={() => setLiked(!liked)}>
        {liked ? "❤️ Liked" : "🤍 Like"}
        </button>

        {liked && <p>This is the liked text.</p>}
    </>
  )
}

export default LinkButton