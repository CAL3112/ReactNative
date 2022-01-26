export const emailValide = adresseMail => {
    const typo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!adresseMail || adresseMail.length <= 0) return false;
    if(!typo.test(adresseMail)) return false;
    return true
}

export const mdpValide = mdp => {
    const typomdp = /^(?=.*[a-z])(?=.{1,})/;
    if(!mdp || mdp.length <= 0) return false;
    if(!typomdp.test(mdp)) return false;
    return true
}

export const nomValide = nom => {
    if(!nom || nom.length <= 0) return false;
    return true
}