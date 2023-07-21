import { z } from 'zod'

// Tipagem para o useForm (poder utilizar o intellisense para validações de
// erro no formulário)
export type CreateUserFormData = z.infer<typeof createUserFormSchema>

// Tipagem do formulário (campos com validações e erros possiveis)
export const createUserFormSchema = z.object({
  //  Recebendo arquivos do formulário:
  //  avatar: z.instanceof(FileList), // para pegar apenas um valor = z.instanceof(FileList).transform(list => list.item(0))
  //  refinando por tamanho da imagem exemplo: 
  //  .refine(file => file.size < 5 * 1024 * 1024, "O arquivo precisa ter no máximo 5Mb") no caso de 5 megabytes
  firstName: z.string().nonempty('O primeiro nome é obrigatório!'),
  lastName: z.string().nonempty('O sobrenome é obrigatório').transform(lastname => {
    return lastname.trim().split(' ').map(word => {
      return word[0].toLocaleUpperCase().concat(word.substring(1))
    }).join(' ')
  }),
  email: z.string().nonempty('O email é obrigatório!').email('Formato de email inválido').toLowerCase(),
  password: z.string().min(6, 'A senha precisa conter no minímo 6 caracteres'),
  techs: z.array(z.object({
    title: z.string().nonempty('O nome da tecnologia é obrigatório'),
    knowledge: z.coerce.number().min(1).max(100)
  })).min(2, 'Insira no minímo 2 tech`s')
})

// .refine = validação criada (não estao incluidas no zod) que necessita um retorno com true or false
// .superRefine = validação criada assim como o refine, porem obtem os valores de todos os campos (exemplo utilização: validação de senha)
