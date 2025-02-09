import '../styles/Loading.css';

export function Loading() {
    return (
        <div className="loading-container" role="alert" aria-live="assertive" aria-busy="true">
            <div className="spinner" aria-label="Loading">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
}

export default Loading;