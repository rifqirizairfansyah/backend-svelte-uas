<script>
  import { onMount } from "svelte";
  import { authenticated } from "../stores/auth";
  import { goto } from "@sapper/app.mjs";
  let email = "",
    password = "",
    name = "",
    birth_date = "",
    birth_place = "",
    address = "",
    phone_number = "",
    token = "";

  onMount(async () => {
    try {
      authenticated.subscribe(async (value) => {
        if (value) {
          token = value;
        } else {
          window.location.href = "/login";
        }
      });
    } catch (e) {
      authenticated.set("");
      token = "";
      window.location.href = "/login";
    }
  });

  const submit = async () => {
    var details = {
      email,
      password,
      name,
      birth_date,
      birth_place,
      address,
      phone_number,
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    await fetch("http://localhost:4000/api/manajemen_organisasi/user", {
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
          goto("/anggota");
        }
      })
      .catch((error) => {
        alert("gagal");
      });
  };
</script>

{#if token != ""}
  <div class="row">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item">
          <a href="/anggota">Anggota</a>
        </li>
        <li class="breadcrumb-item" />
        <li class="breadcrumb-item active" aria-current="page">
          Input Anggota
        </li>
      </ol>
    </nav>
  </div>
  <div class="container">
    <form on:submit|preventDefault={submit}>
      <div class="form-group first mb-2">
        <label for="nama">Nama</label>
        <input type="text" class="form-control" id="nama" bind:value={name} />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email" class="form-control" bind:value={email} />
      </div>
      <div class="form-group last mb-2">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          bind:value={password}
        />
      </div>

      <div class="form-group last mb-2">
        <label for="tanggalLahir">Tanggal Lahir</label>
        <input
          type="text"
          class="form-control"
          id="tanggalLahir"
          bind:value={birth_date}
        />
      </div>

      <div class="form-group last mb-2">
        <label for="tempatLahir">Tempat Lahir</label>
        <input
          type="text"
          class="form-control"
          id="tempatLahir"
          bind:value={birth_place}
        />
      </div>

      <div class="form-group last mb-2">
        <label for="alamat">Alamat</label>
        <textarea
          class="form-control"
          id="alamat"
          rows="3"
          bind:value={address}
        />
      </div>

      <div class="form-group last mb-2">
        <label for="telp">Node. Telp</label>
        <input
          type="text"
          class="form-control"
          id="telp"
          bind:value={phone_number}
        />
      </div>

      <input type="submit" value="Simpan" class="btn btn-block btn-primary" />
    </form>
  </div>
{/if}
