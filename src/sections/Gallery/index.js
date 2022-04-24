import './style.css';

function Gallery({refSection}) {
    return (
        <div id='gallery' ref={refSection}>
            <h1>Gallery Page</h1>
        </div>
    )
}

export default Gallery;