import { Dialog, Transition } from '@headlessui/react'
import {ChangeEvent, Fragment, useState} from 'react'
import axios from 'axios'
interface IModel {
    isOpen: boolean;
    setIsOpen: (status:boolean) => void;
}

const Modal = ({isOpen, setIsOpen}: IModel) => {

    const [formData, setFormData] = useState({
        phoneNumber: '',
        email: '',
        fullName: '',
    });

    const [formError, setFormError] = useState({
        phoneNumber: '',
        email: '',
        fullName: '',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e: FormDataEvent) => {
        e.preventDefault();

        // Проверка наличия значений во всех полях
        if (!formData.phoneNumber || !formData.email || !formData.fullName) {
            setFormError({
                phoneNumber: !formData.phoneNumber ? 'Заполните поле' : '',
                email: !formData.email ? 'Заполните поле' : '',
                fullName: !formData.fullName ? 'Заполните поле' : '',
            });
            return;
        }

        // Ваш запрос через Axios
        try {
            const response = await axios.post('ваш URL', formData);
            console.log('Ответ сервера:', response.data);
            // Дополнительная обработка ответа, если необходимо
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
            // Обработка ошибок, если необходимо
        }
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-header p-6 text-left align-middle shadow-xl transition-all">
                                <div className="mt-2">
                                    <div className="flex justify-center items-center">
                                        <form onClick={() => handleFormSubmit} className="w-full max-w-md">
                                            <div className="mb-4">
                                                <label className="block text-gray-100 text-sm font-bold mb-2"
                                                       htmlFor="phoneNumber">
                                                    Номер телефона
                                                </label>
                                                <input
                                                    type="text"
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    value={formData.phoneNumber}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-3 py-2 border ${formError.phoneNumber && 'border-red-500'} rounded`}
                                                />
                                                <p className="text-red-500 text-xs italic">{formError.phoneNumber}</p>
                                            </div>

                                            <div className="mb-4">
                                                <label className="block text-gray-100 text-sm font-bold mb-2"
                                                       htmlFor="email">
                                                    Почта
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-3 py-2 border ${formError.email && 'border-red-500'} rounded`}
                                                />
                                                <p className="text-red-500 text-xs italic">{formError.email}</p>
                                            </div>

                                            <div className="mb-4">
                                                <label className="block text-gray-100 text-sm font-bold mb-2"
                                                       htmlFor="fullName">
                                                    ФИО
                                                </label>
                                                <input
                                                    type="text"
                                                    id="fullName"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-3 py-2 border ${formError.fullName && 'border-red-500'} rounded`}
                                                />
                                                <p className="text-red-500 text-xs italic">{formError.fullName}</p>
                                            </div>

                                            <div className="mt-6">
                                                <button
                                                    type="submit"
                                                    className="px-4 py-2 bg-accent w-full text-white rounded-full focus:outline-none focus:shadow-outline-blue"
                                                    disabled={!formData.phoneNumber || !formData.email || !formData.fullName}
                                                >
                                                    Отправить
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>

    );
};

export default Modal;