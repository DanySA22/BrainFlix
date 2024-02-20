import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <body> 
      <header> 
        <h3> Logo </h3>
        <input/> 
        <img/>
        <img/>
      </header>
      <main>
        {/* Big video Image */}
        <section>
        <img/>  
        </section> 
        {/* Main Video information */}
        <section></section>
        {/* Comments section */}
        <section className='comment'>
        <h2 className="comment__amount"> 3 Comments </h2>
        <div className="comment__subdivision">
            <img src="./assets/Images/Mohan-muruge.jpg" class="comment__image" alt="Mohan Muruge image">
            <form action="" class="comment__form">
                <label for="" class="comment__form-Label"> NAME</label>
                <input type="text" name="nameInput" class="comment__form-Input" placeholder="Enter your name">
                <label for=""  class="comment__form-Label">COMMENT</label>
                <input type="text" name="commentInput" class="comment__form-Input comment__form-Input--height comment__form-Input--placeholder" placeholder="Add a new comment" >
                  
                 <button class="comment__submit-Button">COMMENT</button>
            </form>
            </div >
        </section>
        {/* Side Videos section */}
        <section></section>
      </main>


    </body>
  )
}

export default App;
