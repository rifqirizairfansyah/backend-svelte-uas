import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, g as globals, v as validate_slots, o as onMount, a as authenticated, e as element, t as text, m as space, c as claim_element, b as children, f as claim_text, h as detach_dev, p as claim_space, q as attr_dev, j as add_location, k as insert_hydration_dev, l as append_hydration_dev, r as set_input_value, u as listen_dev, w as prevent_default, n as noop, x as run_all } from './client.55904bd6.js';

/* src\routes\anggotaa\[slug].svelte generated by Svelte v3.49.0 */

const { console: console_1 } = globals;
const file = "src\\routes\\anggotaa\\[slug].svelte";

function create_fragment(ctx) {
	let div0;
	let nav;
	let ol;
	let li0;
	let a0;
	let t0;
	let t1;
	let li1;
	let a1;
	let t2;
	let t3;
	let li2;
	let t4;
	let li3;
	let t5;
	let t6;
	let div8;
	let form;
	let div1;
	let label0;
	let t7;
	let t8;
	let input0;
	let t9;
	let div2;
	let label1;
	let t10;
	let t11;
	let input1;
	let t12;
	let div3;
	let label2;
	let t13;
	let t14;
	let input2;
	let t15;
	let div4;
	let label3;
	let t16;
	let t17;
	let input3;
	let t18;
	let div5;
	let label4;
	let t19;
	let t20;
	let input4;
	let t21;
	let div6;
	let label5;
	let t22;
	let t23;
	let textarea;
	let t24;
	let div7;
	let label6;
	let t25;
	let t26;
	let input5;
	let t27;
	let input6;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div0 = element("div");
			nav = element("nav");
			ol = element("ol");
			li0 = element("li");
			a0 = element("a");
			t0 = text("Home");
			t1 = space();
			li1 = element("li");
			a1 = element("a");
			t2 = text("Anggota");
			t3 = space();
			li2 = element("li");
			t4 = space();
			li3 = element("li");
			t5 = text("Input Anggota");
			t6 = space();
			div8 = element("div");
			form = element("form");
			div1 = element("div");
			label0 = element("label");
			t7 = text("Nama");
			t8 = space();
			input0 = element("input");
			t9 = space();
			div2 = element("div");
			label1 = element("label");
			t10 = text("Email");
			t11 = space();
			input1 = element("input");
			t12 = space();
			div3 = element("div");
			label2 = element("label");
			t13 = text("Password");
			t14 = space();
			input2 = element("input");
			t15 = space();
			div4 = element("div");
			label3 = element("label");
			t16 = text("Tanggal Lahir");
			t17 = space();
			input3 = element("input");
			t18 = space();
			div5 = element("div");
			label4 = element("label");
			t19 = text("Tempat Lahir");
			t20 = space();
			input4 = element("input");
			t21 = space();
			div6 = element("div");
			label5 = element("label");
			t22 = text("Alamat");
			t23 = space();
			textarea = element("textarea");
			t24 = space();
			div7 = element("div");
			label6 = element("label");
			t25 = text("Node. Telp");
			t26 = space();
			input5 = element("input");
			t27 = space();
			input6 = element("input");
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			nav = claim_element(div0_nodes, "NAV", { "aria-label": true });
			var nav_nodes = children(nav);
			ol = claim_element(nav_nodes, "OL", { class: true });
			var ol_nodes = children(ol);
			li0 = claim_element(ol_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			a0 = claim_element(li0_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t0 = claim_text(a0_nodes, "Home");
			a0_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t1 = claim_space(ol_nodes);
			li1 = claim_element(ol_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			a1 = claim_element(li1_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			t2 = claim_text(a1_nodes, "Anggota");
			a1_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			t3 = claim_space(ol_nodes);
			li2 = claim_element(ol_nodes, "LI", { class: true });
			children(li2).forEach(detach_dev);
			t4 = claim_space(ol_nodes);
			li3 = claim_element(ol_nodes, "LI", { class: true, "aria-current": true });
			var li3_nodes = children(li3);
			t5 = claim_text(li3_nodes, "Input Anggota");
			li3_nodes.forEach(detach_dev);
			ol_nodes.forEach(detach_dev);
			nav_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			div8 = claim_element(nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			form = claim_element(div8_nodes, "FORM", {});
			var form_nodes = children(form);
			div1 = claim_element(form_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			label0 = claim_element(div1_nodes, "LABEL", { for: true });
			var label0_nodes = children(label0);
			t7 = claim_text(label0_nodes, "Nama");
			label0_nodes.forEach(detach_dev);
			t8 = claim_space(div1_nodes);
			input0 = claim_element(div1_nodes, "INPUT", { type: true, class: true, id: true });
			div1_nodes.forEach(detach_dev);
			t9 = claim_space(form_nodes);
			div2 = claim_element(form_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			label1 = claim_element(div2_nodes, "LABEL", { for: true });
			var label1_nodes = children(label1);
			t10 = claim_text(label1_nodes, "Email");
			label1_nodes.forEach(detach_dev);
			t11 = claim_space(div2_nodes);
			input1 = claim_element(div2_nodes, "INPUT", { type: true, id: true, class: true });
			div2_nodes.forEach(detach_dev);
			t12 = claim_space(form_nodes);
			div3 = claim_element(form_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			label2 = claim_element(div3_nodes, "LABEL", { for: true });
			var label2_nodes = children(label2);
			t13 = claim_text(label2_nodes, "Password");
			label2_nodes.forEach(detach_dev);
			t14 = claim_space(div3_nodes);
			input2 = claim_element(div3_nodes, "INPUT", { type: true, class: true, id: true });
			div3_nodes.forEach(detach_dev);
			t15 = claim_space(form_nodes);
			div4 = claim_element(form_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			label3 = claim_element(div4_nodes, "LABEL", { for: true });
			var label3_nodes = children(label3);
			t16 = claim_text(label3_nodes, "Tanggal Lahir");
			label3_nodes.forEach(detach_dev);
			t17 = claim_space(div4_nodes);
			input3 = claim_element(div4_nodes, "INPUT", { type: true, class: true, id: true });
			div4_nodes.forEach(detach_dev);
			t18 = claim_space(form_nodes);
			div5 = claim_element(form_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			label4 = claim_element(div5_nodes, "LABEL", { for: true });
			var label4_nodes = children(label4);
			t19 = claim_text(label4_nodes, "Tempat Lahir");
			label4_nodes.forEach(detach_dev);
			t20 = claim_space(div5_nodes);
			input4 = claim_element(div5_nodes, "INPUT", { type: true, class: true, id: true });
			div5_nodes.forEach(detach_dev);
			t21 = claim_space(form_nodes);
			div6 = claim_element(form_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			label5 = claim_element(div6_nodes, "LABEL", { for: true });
			var label5_nodes = children(label5);
			t22 = claim_text(label5_nodes, "Alamat");
			label5_nodes.forEach(detach_dev);
			t23 = claim_space(div6_nodes);
			textarea = claim_element(div6_nodes, "TEXTAREA", { class: true, id: true, rows: true });
			children(textarea).forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t24 = claim_space(form_nodes);
			div7 = claim_element(form_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			label6 = claim_element(div7_nodes, "LABEL", { for: true });
			var label6_nodes = children(label6);
			t25 = claim_text(label6_nodes, "Node. Telp");
			label6_nodes.forEach(detach_dev);
			t26 = claim_space(div7_nodes);
			input5 = claim_element(div7_nodes, "INPUT", { type: true, class: true, id: true });
			div7_nodes.forEach(detach_dev);
			t27 = claim_space(form_nodes);
			input6 = claim_element(form_nodes, "INPUT", { type: true, class: true });
			form_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a0, "href", "/");
			add_location(a0, file, 105, 34, 2928);
			attr_dev(li0, "class", "breadcrumb-item");
			add_location(li0, file, 105, 6, 2900);
			attr_dev(a1, "href", "/anggota");
			add_location(a1, file, 107, 8, 2999);
			attr_dev(li1, "class", "breadcrumb-item");
			add_location(li1, file, 106, 6, 2961);
			attr_dev(li2, "class", "breadcrumb-item");
			add_location(li2, file, 109, 6, 3050);
			attr_dev(li3, "class", "breadcrumb-item active");
			attr_dev(li3, "aria-current", "page");
			add_location(li3, file, 110, 6, 3088);
			attr_dev(ol, "class", "breadcrumb");
			add_location(ol, file, 104, 4, 2869);
			attr_dev(nav, "aria-label", "breadcrumb");
			add_location(nav, file, 103, 2, 2834);
			attr_dev(div0, "class", "row");
			add_location(div0, file, 102, 0, 2813);
			attr_dev(label0, "for", "nama");
			add_location(label0, file, 117, 6, 3308);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "class", "form-control");
			attr_dev(input0, "id", "nama");
			add_location(input0, file, 118, 6, 3346);
			attr_dev(div1, "class", "form-group first mb-2");
			add_location(div1, file, 116, 4, 3265);
			attr_dev(label1, "for", "email");
			add_location(label1, file, 121, 6, 3466);
			attr_dev(input1, "type", "text");
			attr_dev(input1, "id", "email");
			attr_dev(input1, "class", "form-control");
			add_location(input1, file, 122, 6, 3506);
			attr_dev(div2, "class", "form-group");
			add_location(div2, file, 120, 4, 3434);
			attr_dev(label2, "for", "password");
			add_location(label2, file, 125, 6, 3638);
			attr_dev(input2, "type", "password");
			attr_dev(input2, "class", "form-control");
			attr_dev(input2, "id", "password");
			add_location(input2, file, 126, 6, 3684);
			attr_dev(div3, "class", "form-group last mb-2");
			add_location(div3, file, 124, 4, 3596);
			attr_dev(label3, "for", "tanggalLahir");
			add_location(label3, file, 135, 6, 3871);
			attr_dev(input3, "type", "text");
			attr_dev(input3, "class", "form-control");
			attr_dev(input3, "id", "tanggalLahir");
			add_location(input3, file, 136, 6, 3926);
			attr_dev(div4, "class", "form-group last mb-2");
			add_location(div4, file, 134, 4, 3829);
			attr_dev(label4, "for", "tempatLahir");
			add_location(label4, file, 145, 6, 4115);
			attr_dev(input4, "type", "text");
			attr_dev(input4, "class", "form-control");
			attr_dev(input4, "id", "tempatLahir");
			add_location(input4, file, 146, 6, 4168);
			attr_dev(div5, "class", "form-group last mb-2");
			add_location(div5, file, 144, 4, 4073);
			attr_dev(label5, "for", "alamat");
			add_location(label5, file, 155, 6, 4357);
			attr_dev(textarea, "class", "form-control");
			attr_dev(textarea, "id", "alamat");
			attr_dev(textarea, "rows", "3");
			add_location(textarea, file, 156, 6, 4399);
			attr_dev(div6, "class", "form-group last mb-2");
			add_location(div6, file, 154, 4, 4315);
			attr_dev(label6, "for", "alamat");
			add_location(label6, file, 165, 6, 4579);
			attr_dev(input5, "type", "text");
			attr_dev(input5, "class", "form-control");
			attr_dev(input5, "id", "tempatLahir");
			add_location(input5, file, 166, 6, 4625);
			attr_dev(div7, "class", "form-group last mb-2");
			add_location(div7, file, 164, 4, 4537);
			attr_dev(input6, "type", "submit");
			input6.value = "Simpan";
			attr_dev(input6, "class", "btn btn-block btn-primary");
			add_location(input6, file, 174, 4, 4773);
			add_location(form, file, 115, 2, 3219);
			attr_dev(div8, "class", "container");
			add_location(div8, file, 114, 0, 3192);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div0, anchor);
			append_hydration_dev(div0, nav);
			append_hydration_dev(nav, ol);
			append_hydration_dev(ol, li0);
			append_hydration_dev(li0, a0);
			append_hydration_dev(a0, t0);
			append_hydration_dev(ol, t1);
			append_hydration_dev(ol, li1);
			append_hydration_dev(li1, a1);
			append_hydration_dev(a1, t2);
			append_hydration_dev(ol, t3);
			append_hydration_dev(ol, li2);
			append_hydration_dev(ol, t4);
			append_hydration_dev(ol, li3);
			append_hydration_dev(li3, t5);
			insert_hydration_dev(target, t6, anchor);
			insert_hydration_dev(target, div8, anchor);
			append_hydration_dev(div8, form);
			append_hydration_dev(form, div1);
			append_hydration_dev(div1, label0);
			append_hydration_dev(label0, t7);
			append_hydration_dev(div1, t8);
			append_hydration_dev(div1, input0);
			set_input_value(input0, /*name*/ ctx[2]);
			append_hydration_dev(form, t9);
			append_hydration_dev(form, div2);
			append_hydration_dev(div2, label1);
			append_hydration_dev(label1, t10);
			append_hydration_dev(div2, t11);
			append_hydration_dev(div2, input1);
			set_input_value(input1, /*email*/ ctx[0]);
			append_hydration_dev(form, t12);
			append_hydration_dev(form, div3);
			append_hydration_dev(div3, label2);
			append_hydration_dev(label2, t13);
			append_hydration_dev(div3, t14);
			append_hydration_dev(div3, input2);
			set_input_value(input2, /*password*/ ctx[1]);
			append_hydration_dev(form, t15);
			append_hydration_dev(form, div4);
			append_hydration_dev(div4, label3);
			append_hydration_dev(label3, t16);
			append_hydration_dev(div4, t17);
			append_hydration_dev(div4, input3);
			set_input_value(input3, /*birth_date*/ ctx[3]);
			append_hydration_dev(form, t18);
			append_hydration_dev(form, div5);
			append_hydration_dev(div5, label4);
			append_hydration_dev(label4, t19);
			append_hydration_dev(div5, t20);
			append_hydration_dev(div5, input4);
			set_input_value(input4, /*birth_place*/ ctx[4]);
			append_hydration_dev(form, t21);
			append_hydration_dev(form, div6);
			append_hydration_dev(div6, label5);
			append_hydration_dev(label5, t22);
			append_hydration_dev(div6, t23);
			append_hydration_dev(div6, textarea);
			set_input_value(textarea, /*address*/ ctx[5]);
			append_hydration_dev(form, t24);
			append_hydration_dev(form, div7);
			append_hydration_dev(div7, label6);
			append_hydration_dev(label6, t25);
			append_hydration_dev(div7, t26);
			append_hydration_dev(div7, input5);
			set_input_value(input5, /*phone_number*/ ctx[6]);
			append_hydration_dev(form, t27);
			append_hydration_dev(form, input6);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[9]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[10]),
					listen_dev(input2, "input", /*input2_input_handler*/ ctx[11]),
					listen_dev(input3, "input", /*input3_input_handler*/ ctx[12]),
					listen_dev(input4, "input", /*input4_input_handler*/ ctx[13]),
					listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[14]),
					listen_dev(input5, "input", /*input5_input_handler*/ ctx[15]),
					listen_dev(form, "submit", prevent_default(/*submit*/ ctx[7]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*name*/ 4 && input0.value !== /*name*/ ctx[2]) {
				set_input_value(input0, /*name*/ ctx[2]);
			}

			if (dirty & /*email*/ 1 && input1.value !== /*email*/ ctx[0]) {
				set_input_value(input1, /*email*/ ctx[0]);
			}

			if (dirty & /*password*/ 2 && input2.value !== /*password*/ ctx[1]) {
				set_input_value(input2, /*password*/ ctx[1]);
			}

			if (dirty & /*birth_date*/ 8 && input3.value !== /*birth_date*/ ctx[3]) {
				set_input_value(input3, /*birth_date*/ ctx[3]);
			}

			if (dirty & /*birth_place*/ 16 && input4.value !== /*birth_place*/ ctx[4]) {
				set_input_value(input4, /*birth_place*/ ctx[4]);
			}

			if (dirty & /*address*/ 32) {
				set_input_value(textarea, /*address*/ ctx[5]);
			}

			if (dirty & /*phone_number*/ 64 && input5.value !== /*phone_number*/ ctx[6]) {
				set_input_value(input5, /*phone_number*/ ctx[6]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(div8);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload({ params, query }) {
	return { dataParam: params };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('U5Bslugu5D', slots, []);
	let { dataParam } = $$props;

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
			authenticated.subscribe(async value => {
				if (value) {
					await fetch("http://localhost:4000/api/manajemen_organisasi/user/" + dataParam.slug, {
						method: "GET",
						headers: { Accept: "application/json" }
					}).then(response => response.json()).then(async responseJson => {
						if (responseJson.metadata.http_code == "200") {
							console.log(responseJson.data);
							$$invalidate(0, email = responseJson.data.email);
							$$invalidate(1, password = responseJson.data.password);
							$$invalidate(2, name = responseJson.data.name);
							$$invalidate(3, birth_date = responseJson.data.birth_date);
							$$invalidate(4, birth_place = responseJson.data.birth_place);
							$$invalidate(5, address = responseJson.data.address);
							$$invalidate(6, phone_number = responseJson.data.phone_number);
						}
					}).catch(error => {
						console.error(error);
					});
				} else {
					window.location.href = "/login";
				}
			});
		} catch(e) {
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
			phone_number
		};

		console.log(details);
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
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: formBody
		}).then(response => response.json()).then(async responseJson => {
			if (responseJson.metadata.http_code == "200") {
				alert("berhasil Ditambahkan");
				await goto("/anggota");
			}
		}).catch(error => {
			alert("gagal");
		});
	};

	const writable_props = ['dataParam'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		name = this.value;
		$$invalidate(2, name);
	}

	function input1_input_handler() {
		email = this.value;
		$$invalidate(0, email);
	}

	function input2_input_handler() {
		password = this.value;
		$$invalidate(1, password);
	}

	function input3_input_handler() {
		birth_date = this.value;
		$$invalidate(3, birth_date);
	}

	function input4_input_handler() {
		birth_place = this.value;
		$$invalidate(4, birth_place);
	}

	function textarea_input_handler() {
		address = this.value;
		$$invalidate(5, address);
	}

	function input5_input_handler() {
		phone_number = this.value;
		$$invalidate(6, phone_number);
	}

	$$self.$$set = $$props => {
		if ('dataParam' in $$props) $$invalidate(8, dataParam = $$props.dataParam);
	};

	$$self.$capture_state = () => ({
		preload,
		onMount,
		authenticated,
		dataParam,
		email,
		password,
		name,
		birth_date,
		birth_place,
		address,
		phone_number,
		token,
		submit
	});

	$$self.$inject_state = $$props => {
		if ('dataParam' in $$props) $$invalidate(8, dataParam = $$props.dataParam);
		if ('email' in $$props) $$invalidate(0, email = $$props.email);
		if ('password' in $$props) $$invalidate(1, password = $$props.password);
		if ('name' in $$props) $$invalidate(2, name = $$props.name);
		if ('birth_date' in $$props) $$invalidate(3, birth_date = $$props.birth_date);
		if ('birth_place' in $$props) $$invalidate(4, birth_place = $$props.birth_place);
		if ('address' in $$props) $$invalidate(5, address = $$props.address);
		if ('phone_number' in $$props) $$invalidate(6, phone_number = $$props.phone_number);
		if ('token' in $$props) token = $$props.token;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		email,
		password,
		name,
		birth_date,
		birth_place,
		address,
		phone_number,
		submit,
		dataParam,
		input0_input_handler,
		input1_input_handler,
		input2_input_handler,
		input3_input_handler,
		input4_input_handler,
		textarea_input_handler,
		input5_input_handler
	];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { dataParam: 8 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*dataParam*/ ctx[8] === undefined && !('dataParam' in props)) {
			console_1.warn("<U5Bslugu5D> was created without expected prop 'dataParam'");
		}
	}

	get dataParam() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set dataParam(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bslugu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLjk3MTc5YmRkLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2FuZ2dvdGFhL1tzbHVnXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XHJcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcclxuICAgIHJldHVybiB7IGRhdGFQYXJhbTogcGFyYW1zIH07XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcclxuICBpbXBvcnQgeyBhdXRoZW50aWNhdGVkIH0gZnJvbSBcIi4uLy4uL3N0b3Jlcy9hdXRoXCI7XHJcbiAgZXhwb3J0IGxldCBkYXRhUGFyYW07XHJcbiAgbGV0IGVtYWlsID0gXCJcIixcclxuICAgIHBhc3N3b3JkID0gXCJcIixcclxuICAgIG5hbWUgPSBcIlwiLFxyXG4gICAgYmlydGhfZGF0ZSA9IFwiXCIsXHJcbiAgICBiaXJ0aF9wbGFjZSA9IFwiXCIsXHJcbiAgICBhZGRyZXNzID0gXCJcIixcclxuICAgIHBob25lX251bWJlciA9IFwiXCIsXHJcbiAgICB0b2tlbiA9IFwiXCI7XHJcblxyXG4gIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXV0aGVudGljYXRlZC5zdWJzY3JpYmUoYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL21hbmFqZW1lbl9vcmdhbmlzYXNpL3VzZXIvXCIgK1xyXG4gICAgICAgICAgICAgIGRhdGFQYXJhbS5zbHVnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlSnNvbikgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZUpzb24ubWV0YWRhdGEuaHR0cF9jb2RlID09IFwiMjAwXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlSnNvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGVtYWlsID0gcmVzcG9uc2VKc29uLmRhdGEuZW1haWw7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA9IHJlc3BvbnNlSnNvbi5kYXRhLnBhc3N3b3JkO1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHJlc3BvbnNlSnNvbi5kYXRhLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBiaXJ0aF9kYXRlID0gcmVzcG9uc2VKc29uLmRhdGEuYmlydGhfZGF0ZTtcclxuICAgICAgICAgICAgICAgIGJpcnRoX3BsYWNlID0gcmVzcG9uc2VKc29uLmRhdGEuYmlydGhfcGxhY2U7XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzID0gcmVzcG9uc2VKc29uLmRhdGEuYWRkcmVzcztcclxuICAgICAgICAgICAgICAgIHBob25lX251bWJlciA9IHJlc3BvbnNlSnNvbi5kYXRhLnBob25lX251bWJlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW5cIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBhdXRoZW50aWNhdGVkLnNldChcIlwiKTtcclxuICAgICAgdG9rZW4gPSBcIlwiO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHZhciBkZXRhaWxzID0ge1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGJpcnRoX2RhdGUsXHJcbiAgICAgIGJpcnRoX3BsYWNlLFxyXG4gICAgICBhZGRyZXNzLFxyXG4gICAgICBwaG9uZV9udW1iZXIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRldGFpbHMpO1xyXG5cclxuICAgIHZhciBmb3JtQm9keSA9IFtdO1xyXG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gZGV0YWlscykge1xyXG4gICAgICB2YXIgZW5jb2RlZEtleSA9IGVuY29kZVVSSUNvbXBvbmVudChwcm9wZXJ0eSk7XHJcbiAgICAgIHZhciBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQoZGV0YWlsc1twcm9wZXJ0eV0pO1xyXG4gICAgICBmb3JtQm9keS5wdXNoKGVuY29kZWRLZXkgKyBcIj1cIiArIGVuY29kZWRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBmb3JtQm9keSA9IGZvcm1Cb2R5LmpvaW4oXCImXCIpO1xyXG5cclxuICAgIGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9tYW5hamVtZW5fb3JnYW5pc2FzaS91c2VyXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogZm9ybUJvZHksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlSnNvbikgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZUpzb24ubWV0YWRhdGEuaHR0cF9jb2RlID09IFwiMjAwXCIpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiYmVyaGFzaWwgRGl0YW1iYWhrYW5cIik7XHJcbiAgICAgICAgICBhd2FpdCBnb3RvKFwiL2FuZ2dvdGFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJnYWdhbFwiKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgPG5hdiBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgPG9sIGNsYXNzPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIj48YSBocmVmPVwiL1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9hbmdnb3RhXCI+QW5nZ290YTwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtXCIgLz5cclxuICAgICAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5JbnB1dCBBbmdnb3RhPC9saT5cclxuICAgIDwvb2w+XHJcbiAgPC9uYXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgPGZvcm0gb246c3VibWl0fHByZXZlbnREZWZhdWx0PXtzdWJtaXR9PlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgZmlyc3QgbWItMlwiPlxyXG4gICAgICA8bGFiZWwgZm9yPVwibmFtYVwiPk5hbWE8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwibmFtYVwiIGJpbmQ6dmFsdWU9e25hbWV9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgYmluZDp2YWx1ZT17ZW1haWx9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGxhc3QgbWItMlwiPlxyXG4gICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIGJpbmQ6dmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbGFzdCBtYi0yXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJ0YW5nZ2FsTGFoaXJcIj5UYW5nZ2FsIExhaGlyPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICBpZD1cInRhbmdnYWxMYWhpclwiXHJcbiAgICAgICAgYmluZDp2YWx1ZT17YmlydGhfZGF0ZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGxhc3QgbWItMlwiPlxyXG4gICAgICA8bGFiZWwgZm9yPVwidGVtcGF0TGFoaXJcIj5UZW1wYXQgTGFoaXI8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgIGlkPVwidGVtcGF0TGFoaXJcIlxyXG4gICAgICAgIGJpbmQ6dmFsdWU9e2JpcnRoX3BsYWNlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbGFzdCBtYi0yXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJhbGFtYXRcIj5BbGFtYXQ8L2xhYmVsPlxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgaWQ9XCJhbGFtYXRcIlxyXG4gICAgICAgIHJvd3M9XCIzXCJcclxuICAgICAgICBiaW5kOnZhbHVlPXthZGRyZXNzfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbGFzdCBtYi0yXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJhbGFtYXRcIj5Ob2RlLiBUZWxwPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICBpZD1cInRlbXBhdExhaGlyXCJcclxuICAgICAgICBiaW5kOnZhbHVlPXtwaG9uZV9udW1iZXJ9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2ltcGFuXCIgY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5XCIgLz5cclxuICA8L2Zvcm0+XHJcbjwvZGl2PlxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQXlHOEMsTUFBSTs7OzthQUV2QixTQUFPOzs7OzthQUcyQixlQUFhOzs7Ozs7YUFPbEQsTUFBSTs7Ozs7O2NBSUgsT0FBSzs7Ozs7O2NBSUYsVUFBUTs7Ozs7O2NBVUosZUFBYTs7Ozs7O2NBVWQsY0FBWTs7Ozs7O2NBVWpCLFFBQU07Ozs7OztjQVVOLFlBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkE1RFUsTUFBSTs7Ozs7Ozs7NkJBRXZCLFNBQU87Ozs7Ozs7Ozs4QkFHMkIsZUFBYTs7Ozs7Ozs7Ozs7Ozs7aUNBT2xELE1BQUk7Ozs7Ozs7Ozs7a0NBSUgsT0FBSzs7Ozs7Ozs7OztrQ0FJRixVQUFROzs7Ozs7Ozs7O2tDQVVKLGVBQWE7Ozs7Ozs7Ozs7a0NBVWQsY0FBWTs7Ozs7Ozs7OztrQ0FVakIsUUFBTTs7Ozs7Ozs7Ozs7a0NBVU4sWUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBL0RwQyxvQkFXTTtHQVZKLG9CQVNNO0dBUkosb0JBT0s7R0FOSCxvQkFBcUQ7R0FBekIsb0JBQW9COzs7R0FDaEQsb0JBRUs7R0FESCxvQkFBOEI7OztHQUVoQyxvQkFBOEI7O0dBQzlCLG9CQUF5RTs7O0dBSS9FLG9CQThETTtHQTdESixvQkE0RE87R0EzREwsb0JBR007R0FGSixvQkFBOEI7OztHQUM5QixvQkFBc0U7b0NBQVIsR0FBSTs7R0FFcEUsb0JBR007R0FGSixvQkFBZ0M7OztHQUNoQyxvQkFBd0U7cUNBQVQsR0FB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
