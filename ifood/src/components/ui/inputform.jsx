import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input, Button, Form, FormControl, FormField, FormItem, FormLabel, FormDescription, FormMessage } from '@/components/ui';  // Certifique-se de que os caminhos estão corretos
import { toast } from '@/components/ui/use-toast';

const formSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." })
});

export function InputForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ""
    }
  });

  const onSubmit = (data) => {
    toast({
      title: "You submitted the following values:",
      description: <pre>{JSON.stringify(data, null, 2)}</pre>
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="username" control={form.control}>
          {/* JSX for rendering input and labels */}
        </FormField>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
