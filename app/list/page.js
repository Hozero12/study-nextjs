
export default function Home() {
    let items =['Tomatoes', 'Pasta', 'Lamen'];
  
    return (
      <div>
        <h3 className="title">list</h3>
        {
            items.map((name, index)=>{
                return(
                    <div className="food">
                        <h4>{name}</h4>
                    </div>
                );
            })
        }
      </div>
    )
  }
  