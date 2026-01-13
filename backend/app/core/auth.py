from fastapi import Header, HTTPException, Depends
def require_fedex(x_role: str = Header(...)):
    if x_role.upper() != "FEDEX":
        raise HTTPException(
            status_code=403,
            detail="FedEx access required"
        )
    return True


def require_dca(x_role: str = Header(...)):
    if x_role.upper() != "DCA":
        raise HTTPException(
            status_code=403,
            detail="DCA access required"
        )
    return True

