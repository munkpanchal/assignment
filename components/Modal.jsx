// Modal as a separate component
import { useEffect, useRef } from "react";

function Modal({ openModal, closeModal, data }) {
    const ref = useRef();

    useEffect(() => {
        if (openModal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal]);

    return (
        <dialog ref={ref} onCancel={closeModal} onClick={closeModal}>
            <div className="dialog-wrapper">
                <h1>job description</h1>
                <h2>About the Company</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, eligendi debitis natus
                    veniam doloribus dicta vitae quas, illum officia nostrum, autem itaque saepe harum reprehenderit
                    dolorum maiores omnis recusandae. Dolorum atque corporis soluta in delectus magni fuga repellat
                    recusandae, iusto voluptatem reprehenderit? Ipsa voluptatem voluptas error accusantium nemo
                    architecto reprehenderit eum molestias, provident in dicta tempora, quod aliquam mollitia at quas ea
                    explicabo nobis expedita autem velit inventore saepe! Corporis, asperiores, porro nisi quae sapiente
                    omnis excepturi quod cumque explicabo tenetur voluptates laudantium itaque illo, maiores numquam
                    expedita sint nemo placeat et eum ipsum eaque. Quam minima doloremque saepe tenetur soluta ab, eum
                    possimus repudiandae optio provident, pariatur quis laborum! Repudiandae odio dignissimos fuga eius
                    possimus reiciendis, necessitatibus autem dolores ratione modi molestias sed aliquid non consequatur
                    debitis eveniet, sapiente quas doloribus quasi! Ducimus, autem consectetur atque aut labore
                    asperiores necessitatibus dicta possimus ea eveniet dignissimos quas magni natus explicabo. Deserunt
                    neque alias, nisi odit atque ab explicabo repellendus voluptas ducimus mollitia delectus id,
                    consequuntur est amet? Impedit, possimus in magnam nostrum enim nam ipsam cumque eveniet, itaque
                    culpa quisquam recusandae esse quasi eligendi sequi tenetur reiciendis ex? Praesentium, id assumenda
                    iure aliquid, quis nihil quam dignissimos ratione molestias suscipit repudiandae inventore quo
                    tempora temporibus rerum fugiat asperiores facere ad veniam consequatur, nulla expedita. Quibusdam,
                    error maiores sed eaque vel non, eos labore, sapiente amet iste corrupti rerum fugit repudiandae
                    necessitatibus facere nostrum vero quo. Quia non consequuntur ea repudiandae placeat quod quaerat,
                    amet accusamus tenetur adipisci cum voluptates earum eos repellat veniam soluta alias at! Nihil
                    repellat nisi esse, adipisci delectus magni aspernatur voluptate laboriosam numquam corporis animi
                    maiores quod. Recusandae debitis minima dolorum iste dolorem sequi, voluptatum sint quae quo aperiam
                    fugit placeat aspernatur expedita. Expedita tenetur exercitationem, aut neque quasi temporibus quis
                    cumque, libero, qui amet quae.
                </p>
            </div>
        </dialog>
    );
}

export default Modal;
