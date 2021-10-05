const blogs = [
  {
    id: 1,
    author: "Ben carson",
    image_url: "./images/BerKeley-73.jpg",
    content: ` Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Veniam, explicabo in aspernatur, nemo eius
      accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione
      deleniti totam dolorum reprehenderit provident,
      delectus illo repellendus quisquam dignissimos ut
      saepe nihil modi qui iusto expedita. Quia itaque
      cupiditate, libero doloribus id harum! Sapiente,
      necessitatibus voluptate rerum, consequuntur provident
      aut accusamus est doloribus molestias in, magnam quod
      iste! Eius voluptates odit excepturi eligendi vero
      culpa, assumenda similique ipsa quas nesciunt sit
      alias autem reiciendis beatae iure porro ratione
      tempore nisi earum voluptatum expedita odio! Voluptate
      neque nemo laudantium officia obcaecati fuga nulla,
      quasi temporibus beatae a totam corrupti
      necessitatibus facilis, vero id ducimus cupiditate
      explicabo. Itaque cum doloremque, possimus alias
      excepturi iste quaerat eveniet nisi dignissimos nulla
      minus a tempora explicabo consectetur incidunt vero
      provident error iusto quas quia quos inventore,
      laudantium perferendis autem. Voluptatibus temporibus
      suscipit soluta ad vero nisi ut aut voluptas, possimus
      tempore exercitationem, pariatur recusandae eos id?
      Suscipit earum sequi illum! Placeat reiciendis sit
      corporis modi aspernatur suscipit incidunt ipsam
      laborum fugit ipsum ab fugiat deleniti quia
      perferendis error commodi accusamus aliquid tempora
      nulla, iusto quos, optio animi sunt corrupti? Aperiam
      molestiae excepturi quam, non, quos accusantium
      distinctio corporis ipsa iure expedita maiores saepe
      rerum nisi sapiente cumque sunt amet dolorum optio
      dolor blanditiis quisquam reiciendis? Optio voluptatum
      modi nostrum eum? Praesentium quam repudiandae odio
      voluptatibus quis provident consequuntur, delectus
      modi, atque quasi nesciunt nisi vero iusto! Facilis,
      commodi repellat fugit aut molestiae sapiente tenetur
      aliquam minima possimus exercitationem dolorum cumque
      dolorem est, reiciendis ea. Illum, repudiandae eveniet
      consequuntur molestiae pariatur facere dolor rerum
      mollitia ipsam sint. Qui repellendus ducimus tempora
      quae dolorem esse sint optio veritatis veniam
      temporibus culpa, similique rerum ad praesentium
      pariatur, voluptatum, laborum aut maxime? Impedit
      repudiandae facilis nisi ex? Dolores in excepturi
      repellendus magnam voluptatum eum, aut nulla dolore
      cumque molestiae illo non sed laboriosam quod
      consectetur quo. Nesciunt illum provident vitae eos
      eligendi. Similique, quos magnam placeat incidunt
      necessitatibus harum cumque, vel hic eum nulla veniam
      ipsum animi accusantium unde sint ut? Velit quibusdam
      rem dicta ipsa molestias! Praesentium quam dolorem
      soluta aliquid iste numquam amet culpa, incidunt illo
      veritatis similique eius a. Laudantium quibusdam in
      iste ducimus necessitatibus, asperiores inventore
      temporibus assumenda at blanditiis eligendi mollitia
      ea nesciunt cupiditate aliquid, id accusantium esse,
      quos similique totam. Quidem a dolor, officia
      temporibus architecto labore sed cumque accusantium
      corrupti delectus porro exercitationem praesentium
      amet nostrum ipsa, optio beatae? Provident, ex! Eius?`,
    posted_on: "october 24th 2021",
    category: "Furnishing",
    likes: 45,
    comments: [
      {
        id: 1,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
      {
        id: 2,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
      {
        id: 3,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
      {
        id: 4,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
    ],
  },
  {
    id: 2,
    author: "Ben carson",
    image_url: "./images/Berkeley-95.jpg",
    content: ` Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Veniam, explicabo in aspernatur, nemo eius
      accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione
      deleniti totam dolorum reprehenderit provident,
      delectus illo repellendus quisquam dignissimos ut
      saepe nihil modi qui iusto expedita. Quia itaque
      cupiditate, libero doloribus id harum! Sapiente,
      necessitatibus voluptate rerum, consequuntur provident
      aut accusamus est doloribus molestias in, magnam quod
      iste! Eius voluptates odit excepturi eligendi vero
      culpa, assumenda similique ipsa quas nesciunt sit
      alias autem reiciendis beatae iure porro ratione
      tempore nisi earum voluptatum expedita odio! Voluptate
      neque nemo laudantium officia obcaecati fuga nulla,
      quasi temporibus beatae a totam corrupti
      necessitatibus facilis, vero id ducimus cupiditate
      explicabo. Itaque cum doloremque, possimus alias
      excepturi iste quaerat eveniet nisi dignissimos nulla
      minus a tempora explicabo consectetur incidunt vero
      provident error iusto quas quia quos inventore,
      laudantium perferendis autem. Voluptatibus temporibus
      suscipit soluta ad vero nisi ut aut voluptas, possimus
      tempore exercitationem, pariatur recusandae eos id?
      Suscipit earum sequi illum! Placeat reiciendis sit
      corporis modi aspernatur suscipit incidunt ipsam
      laborum fugit ipsum ab fugiat deleniti quia
      perferendis error commodi accusamus aliquid tempora
      nulla, iusto quos, optio animi sunt corrupti? Aperiam
      molestiae excepturi quam, non, quos accusantium
      distinctio corporis ipsa iure expedita maiores saepe
      rerum nisi sapiente cumque sunt amet dolorum optio
      dolor blanditiis quisquam reiciendis? Optio voluptatum
      modi nostrum eum? Praesentium quam repudiandae odio
      voluptatibus quis provident consequuntur, delectus
      modi, atque quasi nesciunt nisi vero iusto! Facilis,
      commodi repellat fugit aut molestiae sapiente tenetur
      aliquam minima possimus exercitationem dolorum cumque
      dolorem est, reiciendis ea. Illum, repudiandae eveniet
      consequuntur molestiae pariatur facere dolor rerum
      mollitia ipsam sint. Qui repellendus ducimus tempora
      quae dolorem esse sint optio veritatis veniam
      temporibus culpa, similique rerum ad praesentium
      pariatur, voluptatum, laborum aut maxime? Impedit
      repudiandae facilis nisi ex? Dolores in excepturi
      repellendus magnam voluptatum eum, aut nulla dolore
      cumque molestiae illo non sed laboriosam quod
      consectetur quo. Nesciunt illum provident vitae eos
      eligendi. Similique, quos magnam placeat incidunt
      necessitatibus harum cumque, vel hic eum nulla veniam
      ipsum animi accusantium unde sint ut? Velit quibusdam
      rem dicta ipsa molestias! Praesentium quam dolorem
      soluta aliquid iste numquam amet culpa, incidunt illo
      veritatis similique eius a. Laudantium quibusdam in
      iste ducimus necessitatibus, asperiores inventore
      temporibus assumenda at blanditiis eligendi mollitia
      ea nesciunt cupiditate aliquid, id accusantium esse,
      quos similique totam. Quidem a dolor, officia
      temporibus architecto labore sed cumque accusantium
      corrupti delectus porro exercitationem praesentium
      amet nostrum ipsa, optio beatae? Provident, ex! Eius?`,
    posted_on: "october 24th 2021",
    category: "Furnishing",
    likes: 45,
    comments: [
      {
        id: 1,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
      {
        id: 2,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
      {
        id: 3,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
      {
        id: 4,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
    ],
  },
  {
    id: 3,
    author: "Ben carson",
    image_url: "./Berkeley-Feature.jpg",
    content: ` Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Veniam, explicabo in aspernatur, nemo eius
      accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione
      deleniti totam dolorum reprehenderit provident,
      delectus illo repellendus quisquam dignissimos ut
      saepe nihil modi qui iusto expedita. Quia itaque
      cupiditate, libero doloribus id harum! Sapiente,
      necessitatibus voluptate rerum, consequuntur provident
      aut accusamus est doloribus molestias in, magnam quod
      iste! Eius voluptates odit excepturi eligendi vero
      culpa, assumenda similique ipsa quas nesciunt sit
      alias autem reiciendis beatae iure porro ratione
      tempore nisi earum voluptatum expedita odio! Voluptate
      neque nemo laudantium officia obcaecati fuga nulla,
      quasi temporibus beatae a totam corrupti
      necessitatibus facilis, vero id ducimus cupiditate
      explicabo. Itaque cum doloremque, possimus alias
      excepturi iste quaerat eveniet nisi dignissimos nulla
      minus a tempora explicabo consectetur incidunt vero
      provident error iusto quas quia quos inventore,
      laudantium perferendis autem. Voluptatibus temporibus
      suscipit soluta ad vero nisi ut aut voluptas, possimus
      tempore exercitationem, pariatur recusandae eos id?
      Suscipit earum sequi illum! Placeat reiciendis sit
      corporis modi aspernatur suscipit incidunt ipsam
      laborum fugit ipsum ab fugiat deleniti quia
      perferendis error commodi accusamus aliquid tempora
      nulla, iusto quos, optio animi sunt corrupti? Aperiam
      molestiae excepturi quam, non, quos accusantium
      distinctio corporis ipsa iure expedita maiores saepe
      rerum nisi sapiente cumque sunt amet dolorum optio
      dolor blanditiis quisquam reiciendis? Optio voluptatum
      modi nostrum eum? Praesentium quam repudiandae odio
      voluptatibus quis provident consequuntur, delectus
      modi, atque quasi nesciunt nisi vero iusto! Facilis,
      commodi repellat fugit aut molestiae sapiente tenetur
      aliquam minima possimus exercitationem dolorum cumque
      dolorem est, reiciendis ea. Illum, repudiandae eveniet
      consequuntur molestiae pariatur facere dolor rerum
      mollitia ipsam sint. Qui repellendus ducimus tempora
      quae dolorem esse sint optio veritatis veniam
      temporibus culpa, similique rerum ad praesentium
      pariatur, voluptatum, laborum aut maxime? Impedit
      repudiandae facilis nisi ex? Dolores in excepturi
      repellendus magnam voluptatum eum, aut nulla dolore
      cumque molestiae illo non sed laboriosam quod
      consectetur quo. Nesciunt illum provident vitae eos
      eligendi. Similique, quos magnam placeat incidunt
      necessitatibus harum cumque, vel hic eum nulla veniam
      ipsum animi accusantium unde sint ut? Velit quibusdam
      rem dicta ipsa molestias! Praesentium quam dolorem
      soluta aliquid iste numquam amet culpa, incidunt illo
      veritatis similique eius a. Laudantium quibusdam in
      iste ducimus necessitatibus, asperiores inventore
      temporibus assumenda at blanditiis eligendi mollitia
      ea nesciunt cupiditate aliquid, id accusantium esse,
      quos similique totam. Quidem a dolor, officia
      temporibus architecto labore sed cumque accusantium
      corrupti delectus porro exercitationem praesentium
      amet nostrum ipsa, optio beatae? Provident, ex! Eius?`,
    posted_on: "october 24th 2021",
    category: "Furnishing",
    likes: 45,
    comments: [
      {
        id: 1,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
      {
        id: 2,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
      {
        id: 3,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
      {
        id: 4,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
    ],
  },
  {
    id: 4,
    author: "Ben carson",
    image_url: "./images/Burlingame-07.jpg",
    content: ` Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Veniam, explicabo in aspernatur, nemo eius
      accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione
      deleniti totam dolorum reprehenderit provident,
      delectus illo repellendus quisquam dignissimos ut
      saepe nihil modi qui iusto expedita. Quia itaque
      cupiditate, libero doloribus id harum! Sapiente,
      necessitatibus voluptate rerum, consequuntur provident
      aut accusamus est doloribus molestias in, magnam quod
      iste! Eius voluptates odit excepturi eligendi vero
      culpa, assumenda similique ipsa quas nesciunt sit
      alias autem reiciendis beatae iure porro ratione
      tempore nisi earum voluptatum expedita odio! Voluptate
      neque nemo laudantium officia obcaecati fuga nulla,
      quasi temporibus beatae a totam corrupti
      necessitatibus facilis, vero id ducimus cupiditate
      explicabo. Itaque cum doloremque, possimus alias
      excepturi iste quaerat eveniet nisi dignissimos nulla
      minus a tempora explicabo consectetur incidunt vero
      provident error iusto quas quia quos inventore,
      laudantium perferendis autem. Voluptatibus temporibus
      suscipit soluta ad vero nisi ut aut voluptas, possimus
      tempore exercitationem, pariatur recusandae eos id?
      Suscipit earum sequi illum! Placeat reiciendis sit
      corporis modi aspernatur suscipit incidunt ipsam
      laborum fugit ipsum ab fugiat deleniti quia
      perferendis error commodi accusamus aliquid tempora
      nulla, iusto quos, optio animi sunt corrupti? Aperiam
      molestiae excepturi quam, non, quos accusantium
      distinctio corporis ipsa iure expedita maiores saepe
      rerum nisi sapiente cumque sunt amet dolorum optio
      dolor blanditiis quisquam reiciendis? Optio voluptatum
      modi nostrum eum? Praesentium quam repudiandae odio
      voluptatibus quis provident consequuntur, delectus
      modi, atque quasi nesciunt nisi vero iusto! Facilis,
      commodi repellat fugit aut molestiae sapiente tenetur
      aliquam minima possimus exercitationem dolorum cumque
      dolorem est, reiciendis ea. Illum, repudiandae eveniet
      consequuntur molestiae pariatur facere dolor rerum
      mollitia ipsam sint. Qui repellendus ducimus tempora
      quae dolorem esse sint optio veritatis veniam
      temporibus culpa, similique rerum ad praesentium
      pariatur, voluptatum, laborum aut maxime? Impedit
      repudiandae facilis nisi ex? Dolores in excepturi
      repellendus magnam voluptatum eum, aut nulla dolore
      cumque molestiae illo non sed laboriosam quod
      consectetur quo. Nesciunt illum provident vitae eos
      eligendi. Similique, quos magnam placeat incidunt
      necessitatibus harum cumque, vel hic eum nulla veniam
      ipsum animi accusantium unde sint ut? Velit quibusdam
      rem dicta ipsa molestias! Praesentium quam dolorem
      soluta aliquid iste numquam amet culpa, incidunt illo
      veritatis similique eius a. Laudantium quibusdam in
      iste ducimus necessitatibus, asperiores inventore
      temporibus assumenda at blanditiis eligendi mollitia
      ea nesciunt cupiditate aliquid, id accusantium esse,
      quos similique totam. Quidem a dolor, officia
      temporibus architecto labore sed cumque accusantium
      corrupti delectus porro exercitationem praesentium
      amet nostrum ipsa, optio beatae? Provident, ex! Eius?`,
    posted_on: "october 24th 2021",
    category: "Furnishing",
    likes: 45,
    comments: [
      {
        id: 1,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
      {
        id: 2,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
      {
        id: 3,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
      {
        id: 4,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
    ],
  },
  {
    id: 5,
    author: "Ben carson",
    image_url: "./images/Burlingame-34.jpg",
    content: ` Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Veniam, explicabo in aspernatur, nemo eius
      accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione
      deleniti totam dolorum reprehenderit provident,
      delectus illo repellendus quisquam dignissimos ut
      saepe nihil modi qui iusto expedita. Quia itaque
      cupiditate, libero doloribus id harum! Sapiente,
      necessitatibus voluptate rerum, consequuntur provident
      aut accusamus est doloribus molestias in, magnam quod
      iste! Eius voluptates odit excepturi eligendi vero
      culpa, assumenda similique ipsa quas nesciunt sit
      alias autem reiciendis beatae iure porro ratione
      tempore nisi earum voluptatum expedita odio! Voluptate
      neque nemo laudantium officia obcaecati fuga nulla,
      quasi temporibus beatae a totam corrupti
      necessitatibus facilis, vero id ducimus cupiditate
      explicabo. Itaque cum doloremque, possimus alias
      excepturi iste quaerat eveniet nisi dignissimos nulla
      minus a tempora explicabo consectetur incidunt vero
      provident error iusto quas quia quos inventore,
      laudantium perferendis autem. Voluptatibus temporibus
      suscipit soluta ad vero nisi ut aut voluptas, possimus
      tempore exercitationem, pariatur recusandae eos id?
      Suscipit earum sequi illum! Placeat reiciendis sit
      corporis modi aspernatur suscipit incidunt ipsam
      laborum fugit ipsum ab fugiat deleniti quia
      perferendis error commodi accusamus aliquid tempora
      nulla, iusto quos, optio animi sunt corrupti? Aperiam
      molestiae excepturi quam, non, quos accusantium
      distinctio corporis ipsa iure expedita maiores saepe
      rerum nisi sapiente cumque sunt amet dolorum optio
      dolor blanditiis quisquam reiciendis? Optio voluptatum
      modi nostrum eum? Praesentium quam repudiandae odio
      voluptatibus quis provident consequuntur, delectus
      modi, atque quasi nesciunt nisi vero iusto! Facilis,
      commodi repellat fugit aut molestiae sapiente tenetur
      aliquam minima possimus exercitationem dolorum cumque
      dolorem est, reiciendis ea. Illum, repudiandae eveniet
      consequuntur molestiae pariatur facere dolor rerum
      mollitia ipsam sint. Qui repellendus ducimus tempora
      quae dolorem esse sint optio veritatis veniam
      temporibus culpa, similique rerum ad praesentium
      pariatur, voluptatum, laborum aut maxime? Impedit
      repudiandae facilis nisi ex? Dolores in excepturi
      repellendus magnam voluptatum eum, aut nulla dolore
      cumque molestiae illo non sed laboriosam quod
      consectetur quo. Nesciunt illum provident vitae eos
      eligendi. Similique, quos magnam placeat incidunt
      necessitatibus harum cumque, vel hic eum nulla veniam
      ipsum animi accusantium unde sint ut? Velit quibusdam
      rem dicta ipsa molestias! Praesentium quam dolorem
      soluta aliquid iste numquam amet culpa, incidunt illo
      veritatis similique eius a. Laudantium quibusdam in
      iste ducimus necessitatibus, asperiores inventore
      temporibus assumenda at blanditiis eligendi mollitia
      ea nesciunt cupiditate aliquid, id accusantium esse,
      quos similique totam. Quidem a dolor, officia
      temporibus architecto labore sed cumque accusantium
      corrupti delectus porro exercitationem praesentium
      amet nostrum ipsa, optio beatae? Provident, ex! Eius?`,
    posted_on: "october 24th 2021",
    category: "Furnishing",
    likes: 45,
    comments: [
      {
        id: 1,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
      {
        id: 2,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
      {
        id: 3,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
      {
        id: 4,
        author: "james brond",
        comment: `  accusantium labore atque unde consectetur asperiores
      nihil at repellendus corporis fugit delectus tenetur
      ea, ducimus enim alias et itaque iusto rerum.
      Necessitatibus veniam rem quas facere, illo doloribus
      amet officia fuga mollitia similique eligendi
      consectetur exercitationem voluptatum dolor vel,
      tempore magni, voluptatem natus assumenda consequuntur
      ipsum voluptas est modi dignissimos. Vitae repellat
      incidunt nihil ipsum mollitia inventore officia dolore
      temporibus nulla possimus, dignissimos molestiae,
      accusantium totam aut ipsam iste facilis iure facere,
      laborum voluptatibus voluptates. Autem commodi
      asperiores nobis perferendis, nesciunt non velit
      impedit? Possimus, iusto soluta odio id quis dicta
      magni obcaecati. Odit voluptate dolore veniam quae
      possimus ducimus enim sunt eaque vitae ratione`,
        likes: 12,
      },
    ],
  },
];

export default blogs;
