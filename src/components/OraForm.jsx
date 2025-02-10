
export default function OraForm() {
  return (
    <form action="#">
        <div className="col">
            <input type="text" placeholder="Cím" />
            <textarea placeholder="Leírás" rows="5"></textarea>
        </div>
        <aside className="col">
            <button className="btn">Hozzáadás</button>
            {/* <button className="btn outline">Mégsem</button> */}
        </aside>
    </form>
  )
}
