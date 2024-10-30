import React from "react";
import { useParams } from "react-router-dom";


const ArticleDetail = () => {

  const params = useParams()


  return (
    <section>
      <h1>Article Detail</h1>
      <p>{params.articleId}</p>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy mi
        id neque varius, in fringilla quam pellentesque. Proin id urna in sapien
        consequat gravida. Cras convallis, arcu non molestie consectetur, mauris
        est eleifend neque.
      </p>
    </section>
  );
};

export default ArticleDetail;
