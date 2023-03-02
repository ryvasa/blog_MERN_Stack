import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Comment from "./Comment";

const ContentLeft = () => {
  return (
    <>
      <div className="flex-[3]">
        <h1 className="text-5xl pb-1 font-semibold">title</h1>
        <div className="flex justify-center ">
          <img
            src="https://assets.thehansindia.com/h-upload/2021/06/26/1084530-t.webp"
            alt=""
            className="rounded-lg h-96 w-full object-cover"
          />
        </div>
        <div className="flex justify-between m-5">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="w-10 h-10 object-cover mr-4 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Nama author</span>
              <span className="text-sm font-normal">Post in : 3 day ago</span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="tooltip" data-tip="Edit">
              <Link
                to={"/write/:id"}
                className="btn btn-sm btn-circle flex items-center justify-center"
              >
                <FaEdit />
              </Link>
            </div>
            <div className="tooltip" data-tip="Delete">
              <button className="btn btn-sm bg-red-500 border-red-500 border hover:bg-red-400 btn-circle text-white">
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </div>
        <p className="font-light">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
          iure. Ex error optio sed nostrum praesentium quisquam aspernatur alias
          eos reiciendis itaque, dolorem non facilis, animi impedit at minima
          nam quasi vitae ipsum soluta nemo dolor inventore distinctio eum.
          Reprehenderit maxime ducimus et culpa cupiditate quo. Eius unde
          facilis minus quis alias eveniet expedita odio natus quisquam
          reiciendis tempore asperiores maiores esse deleniti ab cumque quo
          voluptates cupiditate, fuga nam ratione dolores dolorum deserunt
          nesciunt. Exercitationem nostrum culpa blanditiis illo ducimus modi
          nam veritatis omnis labore pariatur vero odit quibusdam, velit
          incidunt ipsum dolorem maxime at tempore fugit ratione repellendus
          porro nesciunt dolor. Eligendi quia illum dolores voluptate,
          recusandae laudantium nisi in voluptatum aperiam corrupti laboriosam
          magnam maxime sequi iusto dolore labore aspernatur tempora itaque
          maiores obcaecati natus, eaque dolor accusantium. Inventore sequi nemo
          neque maxime blanditiis beatae ut vero molestiae atque labore
          doloribus ducimus non enim rem porro nisi quis deserunt, officiis
          laborum esse. Illum ducimus error dicta labore excepturi ab architecto
          molestiae commodi impedit? Expedita eos ut quia voluptatum doloribus,
          soluta eum accusamus eveniet dolor est iste amet iure nostrum cumque
          dolorum minima nihil impedit veritatis saepe commodi ducimus
          consequuntur ullam doloremque omnis. Repellat ullam laboriosam
          temporibus rem harum excepturi nulla, inventore fugit ipsa sed
          doloremque quas neque unde suscipit debitis esse. Totam ipsa deleniti
          quaerat harum aliquid, fugit quod ut magnam sequi adipisci, animi eos
          nulla corrupti assumenda reiciendis quia provident sit ipsum
          consequuntur. Itaque aliquid libero distinctio sed, fugiat eum
          expedita at perspiciatis cupiditate. Reiciendis et expedita
          laboriosam, veniam doloremque quae amet accusantium nisi ipsum quia!
          Reprehenderit perferendis architecto minus magnam pariatur possimus
          eaque reiciendis velit fugiat dignissimos quibusdam quasi nemo maiores
          nobis itaque ipsa impedit maxime, rerum illo recusandae. Dicta
          architecto voluptatum delectus itaque saepe dolores omnis fuga cum
          tenetur est recusandae, neque, ut incidunt ipsam. Aliquid tempora
          doloremque sed suscipit fugit laborum animi ullam dolorem repellat eum
          dolores, molestiae harum, magnam reprehenderit nobis nam saepe
          deserunt doloribus ea tempore perferendis? Aut, quos fugiat? Ea rem
          aspernatur amet aliquid ex perferendis quos? Quas iste magni nostrum
          maiores alias id culpa voluptatem illo placeat unde. Obcaecati aperiam
          similique explicabo. Assumenda tenetur eum explicabo dolor quo debitis
          quae, eligendi aliquid accusamus ipsa sit hic odit quas sunt quia
          minima? Modi sapiente eligendi ab consequatur eius voluptate dicta
          omnis, eos rem delectus aspernatur debitis tenetur exercitationem a
          qui itaque atque sint, similique fugit? Expedita voluptas voluptate
          ut, doloribus perferendis iusto cum odit eligendi aliquam impedit
          maxime facere dolor accusantium sit deleniti harum autem magni dolorum
          architecto. Porro repudiandae sapiente cum. Consectetur totam, dicta
          debitis saepe delectus error, earum veritatis blanditiis numquam
          possimus accusantium, necessitatibus voluptatem laudantium ut modi
          excepturi eveniet enim hic. Iusto molestiae impedit officia veritatis
          iste ex nisi tempore inventore, cupiditate expedita neque autem a
          dolorem repellat quidem ullam eos consequuntur quo! Porro nemo
          doloribus nihil, assumenda rerum quia similique quod sequi id mollitia
          eos placeat quae! Facere odio, quod sed repudiandae optio nemo, unde
          quo libero earum assumenda dolorum provident, quaerat nulla expedita
          ab voluptas non. Velit voluptatum ut cum mollitia delectus non rem,
          ipsam aspernatur consequatur tempore impedit iusto repellendus
          voluptates nostrum similique ea iste cupiditate veritatis eaque libero
          earum iure et placeat nihil. Veniam, dolores repudiandae? Quas eos
          accusamus nemo error ratione magni laboriosam sunt, sequi, tempore
          quod et. Quas voluptate error minima laborum tempore ad doloribus
          vitae, dignissimos praesentium reprehenderit inventore quidem aliquid
          est unde enim eum eveniet id perspiciatis tempora facilis adipisci
          perferendis odio minus dolor. Molestiae repudiandae dicta voluptas,
          praesentium maiores minus cum facere officiis vel facilis commodi quo
          id natus totam eius officia distinctio deserunt? Ut cum, ipsam in sit
          perferendis praesentium atque corporis commodi, id explicabo laborum
          ex laboriosam dolores ipsa, debitis libero fugiat cumque numquam et
          sed quia exercitationem. Excepturi repudiandae praesentium laudantium
          id aspernatur alias nemo debitis delectus molestias quasi optio beatae
          voluptate vitae a maxime sit non fugiat quis quod repellendus, neque
          distinctio exercitationem ab? Sapiente repellat qui deleniti tenetur
          accusantium cum magnam architecto dicta saepe est soluta quasi
          commodi, eaque vero amet ut perspiciatis nam porro. Fugit delectus
          explicabo asperiores magnam? Iure quidem aliquam eum quae molestiae
          inventore eaque fuga similique ipsam ipsum nam illo obcaecati sapiente
          quos minima impedit, animi quo odit? Ipsam repellendus harum corrupti
          ipsa, repudiandae deleniti delectus aperiam excepturi iste totam
          blanditiis assumenda molestiae mollitia maxime necessitatibus, autem
          adipisci perspiciatis quae fuga quis sed aut iure a neque? Eveniet,
          ullam at impedit minima excepturi consequuntur? Esse, rem. Voluptatem
          soluta earum asperiores ab voluptatibus mollitia, fugiat hic quaerat
          accusantium odit quia tenetur, accusamus facere cupiditate dolor eaque
          alias ratione illo dolorum vero. Quod repudiandae nobis consequatur
          corrupti iusto illum qui quidem quae ea numquam, rerum, ullam minima
          praesentium, a veritatis itaque ad saepe unde. Laudantium dolorem
          neque eum? Maiores corrupti dignissimos nemo sint aspernatur, modi
          doloremque rem repellat consequuntur et commodi?
        </p>
        <Comment />
      </div>
    </>
  );
};

export default ContentLeft;
