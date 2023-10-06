<template>
	<div>
		<input
		:class="`bg-${bg} border border-${borderWidth} border-${borderColor} text-${textColor} rounded-${borderRadius} focus:outline-none font-medium leading-none text-gray-800 py-5 w-full pl-3`"
		:type=type
		:value="(field.getValue() === null) ? '' : field.getValue()"
		@change="handleInput"
		/>
		<div
		v-if="field.error != null"
		class="text-red-500"
		>
		{{ field.error }}
	</div>
	</div>
</template>
	
<script lang="ts">

import Field from "@/lib/forms/fields.js"
export default {
	props: {
		value: {
			type: String,
			default: null,
		},
		field: {
			type: Field<string>,
			default: null
		},
		stateSyncer: {
			type: Function,
			default: null
		},
		type: {
			type: String,
			default: "text"
		},
		bg:{
			type: String,
			default: "primaryDark"
		},
		borderRadius:{
			type: String,
			default: "2xl"
		},
		borderWidth:{
			type: String,
			default: "2"
		},
		borderColor: {
			type: String,
			default: "light"
		},
		textColor: {
			type: String,
			default: "light"
		}
	},
	methods: {
		handleInput(event: any) {
			console.log("Value Changed")
			this.field.setValue(event.target.value);
			if(this.stateSyncer != null){
				this.stateSyncer();
			}
		},
	},
};
</script>
	