function cekLogin(username,password){
    if(username == "admin" && password == 12345){
        console.log("Login Berhasil")
    } else {
        console.log("Login Gagal")
    }
}

cekLogin("admin",12345);