import style from '../../../styles/post/complements/Comments.module.css'

const Comments = () => {
    return (
        <div className={style.container}>
            <div className={style.card}>
                
                <div className={style.card_title}>
                    <img src="../fire.png"/>
                    <h5>DazzHub</h5>
                </div>

                <div className={style.card_body}>
                    <p>
                        Nisi voluptate ex irure amet amet. Ut nostrud dolor quis nulla magna dolore labore ea
                        tempor reprehenderit laborum ex ut aliqua.Adipisicing sunt aliqua
                        ipsum dolore commodo in. Eiusmod eiusmod voluptate ea officia laborum dolor 
                        incididunt ipsum cupidatat voluptate consectetur minim excepteur.
                    </p>
                </div>

            </div>
        </div>
    );
}


export default Comments;