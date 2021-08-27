import '../../App.scss';
import './posts.scss';
import logoLoading from '../../image/icon-loading.png';

function Posts() {
    return (
      <>
        <div className="section-posts">
            <h1>Fil d'actualité</h1>

            <div className="posts-item">
                <img src={logoLoading} alt='logo loading' />
            </div>
        </div>
      </>
    );
  }
  
export default Posts;