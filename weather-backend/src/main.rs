use axum::{Router, routing::get};

async fn app() -> Router {
    Router::new().route("/", get(|| async { "Hello, world!" }))
}

#[tokio::main]
async fn main() {
    let app = app().await;
    let url = "0.0.0.0:8000";
    println!("🚀 running on http://{}", url);
    let listener = tokio::net::TcpListener::bind(url).await.unwrap();
    axum::serve(listener, app).await.unwrap()
}

#[cfg(test)]
mod tests {
    use super::*;
    use axum::body::Body;
    use axum::http::{Request, StatusCode};
    use http_body_util::BodyExt; // <-- this is the magic
    use tower::ServiceExt; // for `oneshot`

    #[tokio::test]
    async fn test_root_returns_hello_world() {
        let app = app().await;

        let response = app
            .oneshot(Request::builder().uri("/").body(Body::empty()).unwrap())
            .await
            .unwrap();

        assert_eq!(response.status(), StatusCode::OK);

        // read response body
        let body_bytes = response.into_body().collect().await.unwrap().to_bytes();
        let body_text = String::from_utf8(body_bytes.to_vec()).unwrap();

        assert_eq!(body_text, "Hello, world!");
    }
}
