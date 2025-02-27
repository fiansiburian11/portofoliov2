import portoweb2 from "public/images/portoweb2.png";
import portoweb from "public/images/portoweb.png";
import blogs from "public/images/blogs.png";
import blogs1 from "public/images/blogs1.png";
import tes from "public/images/tes.png";
import tes1 from "public/images/tes1.png";
import porto3d from "public/images/porto3d.png";

export const products = [
  {
    href: "https://fiansiburian.my.id/",
    title: "My portfolio website",
    description: "Sebuah web portofolio saya yang meringkas tentang saya ",
    thumbnail: portoweb,
    images: [portoweb, portoweb2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "portoweb",
    content: (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias laudantium ex deleniti cum voluptatum quaerat distinctio perferendis voluptatibus recusandae cupiditate ratione, non fugiat sed a fugit? Distinctio perspiciatis
          voluptas illum!{" "}
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam totam nesciunt facere rem cupiditate natus eum, porro fugit excepturi quam asperiores repellat tenetur omnis nisi mollitia dicta exercitationem. Labore,
          dignissimos?
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://blogs.fiansiburian.my.id/",
    title: "Blogs",
    description: "web simple untuk blog saya",
    thumbnail: blogs,
    images: [blogs, blogs1],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "blogs",
    content: (
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatem cum rem amet sit quae non, quo tempore inventore sunt laudantium rerum ratione laborum! Deserunt, ad quo! Autem, in dicta. </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae cum facere autem deleniti, et consequuntur suscipit accusamus, nisi alias in expedita aperiam, amet est quasi voluptas dolor itaque nemo quaerat!</p>{" "}
      </div>
    ),
  },
  {
    href: "https://lp.fiansiburian.my.id/",
    title: "Web ngulas front end",
    description: "sebuah web untuk belajar tech stack baru",
    thumbnail: tes,
    images: [tes, tes1],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "ngulas front end",
    content: (
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique provident laboriosam, a sunt, reprehenderit necessitatibus modi illo illum hic sint explicabo. Debitis laudantium, mollitia quod nisi odit dolorum itaque amet?{" "}
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente officia, at dolor nisi blanditiis officiis, id quo a eaque tempora veritatis voluptatem? Aliquid tempore, similique blanditiis asperiores eum id beatae.</p>{" "}
      </div>
    ),
  },
  {
    href: "https://portofolio.fiansiburian.my.id/",
    title: "Portofolio 3 D",
    description: "sebuah web portofolio  simpel yang menggunakan animation 3d yang keren",
    thumbnail: porto3d,
    images: [porto3d, porto3d],
    stack: ["Nextjs", "Tailwindcss", "ReactBits"],
    slug: "web3d",
    content: (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cum perferendis explicabo cumque numquam nulla molestiae dignissimos quod voluptatibus soluta harum et expedita dolorum facere corrupti, animi ipsam laborum
          accusamus.{" "}
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae corrupti perferendis eaque unde pariatur eos quod, quidem molestiae, earum velit, porro delectus provident? Iusto officiis rem porro cum sint.</p>{" "}
      </div>
    ),
  },
];
