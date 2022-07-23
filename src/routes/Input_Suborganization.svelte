<script>
  let nama = "",
    deskripsi = "",
    alamat = "";

  const submit = async () => {
    var details = {
      nama,
      deskripsi,
      alamat,
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    await fetch("http://localhost:4000/api/online-course/registrations", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    })
      .then((response) => response.json())
      .then(async (responseJson) => {
        if (responseJson.metadata.http_code == "201") {
          alert("berhasil Ditambahkan");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
</script>

<div class="row">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/">Home</a></li>
      <li class="breadcrumb-item">
        <a href="/Suborganisasi">Subs Organisasi</a>
      </li>
      <li class="breadcrumb-item" />
      <li class="breadcrumb-item active" aria-current="page">
        Input Subs Organisasi
      </li>
    </ol>
  </nav>
</div>
<div class="container">
  <form on:submit|preventDefault={submit}>
    <div class="form-group first">
      <label for="username">Nama</label>
      <input type="text" class="form-control" id="username" bind:value={nama} />
    </div>
    <div class="form-group">
      <label for="username">Deskripsi</label>
      <input
        type="text"
        class="form-control"
        id="username"
        bind:value={deskripsi}
      />
    </div>
    <div class="form-group last mb-4">
      <label for="password">Alamat</label>
      <input
        type="password"
        class="form-control"
        id="password"
        bind:value={alamat}
      />
    </div>

    <input type="submit" value="Simpan" class="btn btn-block btn-primary" />
  </form>
</div>
