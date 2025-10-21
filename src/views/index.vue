<template>
    <Container>
        <form @submit.prevent="handleSubmit" autocomplete="off">
            <div class="mb-3">
                <Label>{{ t('label.employee_id') }}</Label>
                <Input v-model="form.id" />
                {{ errors.id }}
            </div>
            <Button type="submit" grid>{{ t('button.login') }}</Button>
        </form>
    </Container>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import * as yup from 'yup';
import { formValidate} from '@/utils/validation';
import Container from '@/components/Container.vue';
import Button from '@/components/Button.vue';
import Label from '@/components/Label.vue';
import Input from '@/components/Input.vue';

const { t } = useI18n();

const errors = ref({});
const form = ref({
    id: '',
});

const schema = yup.object({
    id: yup.string().required().label('label.employee_id'),
});

const handleSubmit = async () => {
    const result = await formValidate(schema, form.value)
    errors.value = result.errors;
    if (!result.isValid) return

    alert(form.value.id);
};
</script>