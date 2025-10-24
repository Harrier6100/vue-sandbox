<template>
    <Container>
        <form @submit.prevent="onSubmit" autocomplete="off">
            <div class="mb-3">
                <Label>{{ t('label.employee_id') }}</Label>
                <Input ref="inputRef" v-model="form.id" @focus="onFocusId" />
                <Message :error="errors.id" />
            </div>
            <Button type="submit" grid :disabled="isLoading">{{ t('button.login') }}</Button>
            <Message :error="errors.error" />
        </form>
    </Container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import * as yup from 'yup';
import { useAuth } from '@/composables/useAuth';
import { useLoading } from '@/composables/useLoading';
import { useSpinning } from '@/composables/useSpinning';
import { formValidate} from '@/utils/validation';
import { api } from '@/api/api';
import Container from '@/components/Container.vue';
import Button from '@/components/Button.vue';
import Label from '@/components/Label.vue';
import Input from '@/components/Input.vue';
import Message from '@/components/Message.vue';

const { t } = useI18n();
const { login } = useAuth();
const { isLoading, startLoading, stopLoading } = useLoading();
const { isSpinning, execute } = useSpinning();

const errors = ref({});
const inputRef = ref(null);
const form = ref({
    id: '',
});

const schema = yup.object({
    id: yup.string().required().label('label.employee_id'),
});

const onFocusId = () => {
    Scanner.getConfig();
    Scanner.setConfig();
};

const onSubmit = async () => {
    const result = await formValidate(schema, form.value)
    errors.value = result.errors;
    if (!result.isValid) return

    try {
        startLoading();
        await execute(async () => {
            await login(form.value.id);
        });
    } catch (error) {
        const message = error.response?.message ?? error.message;
        errors.value.error = message;
    } finally {
        stopLoading();
    }
};

onMounted(() => {
    inputRef.value?.focus();
});
</script>