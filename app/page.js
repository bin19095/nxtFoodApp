import Link from "next/link";

import classes from './page.module.css';
import ImageSlideshow from "./components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow/>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p> Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community"> Join the Community</Link>
            <Link href="/meals"> Explore Meals </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2> How it works</h2>
          <p>
            NextLevel Food is a place to navigate the food before you choose your meal so that you don&apos;t regret on selection
            along with receipes shared all over the world. It&apos;s a place to enjoy new dishes, and to share other food flavours.
          </p>
          <p>
            NextLevel Food is a place to visit for your new discovery of dishes, and find you new list of favorite food 
            if you are food lover then you would definitely choose this place.
          </p>
        </section>

      </main>
    </>

  );
}
