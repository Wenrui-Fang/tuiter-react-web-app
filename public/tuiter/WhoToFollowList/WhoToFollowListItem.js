const WhoToFollowListItem = who => {
    return (`
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-2">
                        <img class="rounded-circle" src=${who.avatarIcon} width="45px" height="45px">
                    </div>
                    <div class="col-7">
                        <div class="fw-bolder">${who.userName}
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div class="text-secondary">@${who.handle}</div>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-primary mt-1 rounded-pill">Follow</button>
                    </div>
                </div>
            </div>
    `)
}

export default WhoToFollowListItem;