import CardList from './component/cardList/CardList';
import CategoryList from './component/categoryList/CategoryList';
import Featured from './component/featured/Featured';
import Menu from './component/menu/Menu';
import styles from './homepage.module.css'

export default function Home() {
  return (
      <div className={styles.container}>
        <Featured/>
        <CategoryList/>
        <div className={styles.content}>
          <CardList />
          <Menu/>
        </div>
      </div>
  );
}
