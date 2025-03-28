/* sidebar */
.sidebar{
    background: #fff;
    width: 15%;
    height: 100vh;
    position: fixed;
    top: 0;
    padding-left: 2%;
    padding-top: 98px;

}

.shortcut-links a img{
width: 20px;
margin-right: 20px;
}

.shortcut-links a{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: fit-content;
    flex-wrap: wrap;
    margin-top: 13px;
}


.shortcut-links a:first-child{
    color: #ed3833;
}

.sidebar hr{
    border: 0;
    height: 1px;
    background: #ccc;
    width: 85%;
}
.subscribed-list h3{
    font-size: 13px;
    margin: 20px 0;
    color: #5a5a5a;
}
.subscribed-list a{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: fit-content;
    flex-wrap: wrap;
}
.subscribed-list a img{
    width: 25px;
    border-radius: 50%;
    margin-right: 28px;
}


.small-sidebar{
    width: 5%;
}
.small-sidebar .shortcut-links a p  , .small-sidebar .subscribed-list a , .small-sidebar h3{
    display: none;
}

.small-sidebar hr{
    width: 50%;
    margin-bottom: 25px;
    display: none;

}
.sidebar {
    overflow-y: auto;
}