import React from "react";
// import Profile from "../../assets/images/profile.jpg";

const Sidebar = (props) => {
    const closeNav = () => {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("openSidebar").style.display = "flex";

        return false;
    };

    const addModal = () => {
        // Get the modal
        let addModal = document.getElementById("addModal");

        // Get the button that opens the modal
        let addBtn = document.getElementById("add");

        // Get the <span> element that closes the modal
        let addSpan = document.getElementsByClassName("add-close")[0];

        // When the user clicks the button, open the modal
        addBtn.onclick = function () {
            addModal.style.display = "block";
        };

        // When the user clicks on <span> (x), close the modal
        addSpan.onclick = function () {
            addModal.style.display = "none";
        };

        // When the user clicks anywhere outside of the modal, close it
        //kek gini w banned dari arkadmey
        window.onclick = function (event) {
            if (event.target === addModal) {
                addModal.style.display = "none";
            }
        };
        return false;
    };
    const handleLogout = (event) => {
        event.preventDefault()
        try {
            localStorage.removeItem('KEY_TOKEN');
            props.history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <aside id="mySidebar" className="aside-nav-container">
                <div className="menu-btn">
                    <i onClick={closeNav} className="fas fa-bars"></i>
                </div>
                <div className="profile-container">
                    <img src="https://scontent.fjog3-1.fna.fbcdn.net/v/t1.0-9/82893153_2360473994056415_2531902101668233216_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_oc=AQlj78Qk0E9tpk7E0EGIu_dox-f9Fqo18Z1yPAVzSzM0DNnb1mQrDhJ-rnXJ2Z8Hbno&_nc_ht=scontent.fjog3-1.fna&oh=ec8d6ce24898894f008967c38311eaf1&oe=5E9D392F" width="100%" alt="profil.jpg" />
                    <h3>Alan Nugraha</h3>
                </div>
                <nav className="aside-nav">
                    <ul>
                        <li>
                            {/* eslint-disable-next-line */}
                            <a id="add" onClick={addModal}>
                                Add Book
                            </a>
                        </li>
                        <li>
                            {/* eslint-disable-next-line */}
                            <a onClick={(event) => { handleLogout(event) }}>Logout</a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;