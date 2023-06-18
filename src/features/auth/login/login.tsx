"use client"
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/features/components/ui"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAppDispatch } from "@/common"
import { authThunks } from "@/features/auth/auth.slice"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  rememberMe: z.boolean().default(false).optional(),
})

export function Login() {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    dispatch(authThunks.login(values))
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className=" w-[420px] h-[528px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <CardHeader>
                    <FormLabel>Email</FormLabel>
                  </CardHeader>
                  <CardContent>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </CardContent>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <CardHeader>
                    <FormLabel>Password</FormLabel>
                  </CardHeader>
                  <CardContent>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </CardContent>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex">
                  {/*<CardHeader>*/}
                  {/*  <FormLabel>Remember me</FormLabel>*/}
                  {/*</CardHeader>*/}
                  <CardContent>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="ml-4">Remember me</FormLabel>
                    <Button className="ml-15 " variant="link">
                      {" "}
                      Forgot Password?
                    </Button>
                  </CardContent>
                </FormItem>
              )}
            />
            <CardFooter className="flex flex-col">
              <Button className="w-[300px] " type="submit">
                Sing In
              </Button>
            </CardFooter>
          </form>
        </Form>
        <div className="flex flex-col justify-center items-center">
          <Button
            className="w-[200px] h-[24px] mt-[20px] text-gray-400"
            variant="link"
          >
            Don't have an account?
          </Button>
          <Button
            className="w-[147px] h-[24px] mt-[20px] text-blue-600 underline"
            variant="link"
          >
            Sign Up
          </Button>
        </div>
      </Card>
    </div>
  )
}
