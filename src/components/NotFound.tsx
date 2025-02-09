
export function NotFound() {
    return (
        <div className="not-found-container" role="alert" aria-live="assertive">
            <h2>404: Página no encontrada</h2>
            <p>Lo sentimos, la página que estás buscando no existe.</p>
        </div>
    );
}

export default NotFound;