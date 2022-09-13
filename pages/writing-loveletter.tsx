import * as Arrays from '@/data/Array'
import Head from 'next/head'
import HopeToDo, { HopeToDoProps } from '@/components/HopeToDo'
import IconButton from '@/components/IconButton'
import Link from 'next/link'
import React, { FC, useState, Dispatch, ChangeEvent } from 'react'
import SectionTitle from '@/components/SectionTitle'
import senkaAiIcon from '~/images/senka_ai.jpg'
import { DeepReadonly } from '@/data/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LoveLetterProps, loveLetterProps } from '@/components/LoveLetter'
import { NextPage } from 'next'
import { ToastContainer, toast } from 'react-toastify'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faQuestionCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { isEmpty } from 'lodash'
import { title } from '@/data/title'
import { useBoolean } from 'react-hanger/array'
import { useHopeToDoComponents } from '@/data/hooks/useHopeToDoComponents'
import { useInput } from 'react-hanger'
import { useRouter } from 'next/router'
import { useSwitch3 } from '@/data/hooks/useSwitch3'

const hopeToDoWithYou: Readonly<Array<string>> = [
  'お話し',
  'デート',
  'ボイチャ',
  '作業通話',
  'VR睡眠',
  'VR感度開発',
  'DM（Discordなど）',
  'リアルで会う',
  'ボイトレ',
]

// 'to' or 'from'
const hopeToDoAndYou: Readonly<Array<string>> = ['なでなで', 'だきつき', 'キス']

const hopeToEcchiAndYou: Readonly<Array<string>> = [
  'みみなめ',
  'ディープキス',
  '服を脱ぐ',
  '服を脱がす',
  'あいぶ（上半身）',
  'あいぶ（下半身）',
  'ほんばん',
]

const defaultWritingLoveLetterResult: DeepReadonly<LoveLetterProps> = {
  name: '',
  gender: '',
  role: 'wife',
  startTimeToIn: '21:00',
  endTimeToIn: '00:00',
  yourIconFilePath: '',
  hopeToDoWithYouStates: [...Array(hopeToDoWithYou.length).fill(0)],
  hopeToDoToYouStates: [...Array(hopeToDoAndYou.length).fill(0)],
  hopeToDoFromYouStates: [...Array(hopeToDoAndYou.length).fill(0)],
  hopeToEcchiToYouStates: [...Array(hopeToEcchiAndYou.length).fill(0)],
  hopeToEcchiFromYouStates: [...Array(hopeToEcchiAndYou.length).fill(0)],
  otherNotes: '',
}

const debugWritingLoveLetterResult: DeepReadonly<LoveLetterProps> = {
  name: '千夏あい',
  gender: 'イヌ',
  role: 'wife',
  startTimeToIn: '21:00',
  endTimeToIn: '23:00',
  yourIconFilePath: senkaAiIcon.src,
  hopeToDoWithYouStates: [1, 1, 0, 1, 1, 1, 1, 1, 0],
  hopeToDoToYouStates: [1, 1, 1],
  hopeToDoFromYouStates: [1, 1, 0],
  hopeToEcchiToYouStates: [1, 1, 2, 0, 2, 1, 1],
  hopeToEcchiFromYouStates: [1, 1, 2, 0, 2, 1, 1],
  otherNotes: '受け体質です //',
}

type WritingLoveLetterResult = LoveLetterProps

/**
 * To make a request for [[Sheet]].
 */
const WritingLoveLetter: NextPage = () => {
  const router = useRouter()

  const maybeInput = getPreviousPropsIfExists(router.query)
  const input: DeepReadonly<LoveLetterProps> | null = !(maybeInput instanceof Error)
    ? maybeInput
    : (() => {
        toast.error(maybeInput.message, {
          position: 'top-center',
        })
        return null
      })()

  const name = useInput(input?.name ?? defaultWritingLoveLetterResult.name)
  const gender = useInput(input?.gender ?? defaultWritingLoveLetterResult.gender)

  const [role, setRole] = useState(input?.role ?? defaultWritingLoveLetterResult.role)
  const setRoleByEvent = (e: ChangeEvent<HTMLInputElement>) => setRole(e.target.value)
  const isRoleWife = () => role === 'wife'
  const isRoleHusband = () => role === 'husband'
  const isRoleAnother = () => !isRoleWife() && !isRoleHusband()
  const anotherRoleText = useInput('')
  const setRoleToAnother = () => setRole(anotherRoleText.value)

  const startTimeToIn = useInput(
    input?.startTimeToIn ?? defaultWritingLoveLetterResult.startTimeToIn,
  )
  const endTimeToIn = useInput(input?.endTimeToIn ?? defaultWritingLoveLetterResult.endTimeToIn)
  const [yourIconFilePath, setYourIconFilePath] = useState(
    input?.yourIconFilePath ?? defaultWritingLoveLetterResult.yourIconFilePath,
  )
  const setYourIconWithPreviewing = previewYourIconWith(setYourIconFilePath)

  const withYouComponents = useHopeToDoComponents(
    Arrays.zipWith(hopeToDoWithYou, input?.hopeToDoWithYouStates ?? defaultWritingLoveLetterResult.hopeToDoWithYouStates, (text, state) => ({text, state}))
  )
  const toYouComponents = useHopeToDoComponents(
    input?.hopeToDoToYouStates ?? defaultWritingLoveLetterResult.hopeToDoToYouStates,
  )
  const fromYouComponents = useHopeToDoComponents(
    input?.hopeToDoFromYouStates ?? defaultWritingLoveLetterResult.hopeToDoFromYouStates,
  )

  const toYouEcchiComponents = useHopeToDoComponents(
    input?.hopeToEcchiToYouStates ?? defaultWritingLoveLetterResult.hopeToEcchiToYouStates,
  )
  const [toYouEcchiIsVisible, { toggle: toggleToYouEcchiIsVisible }] = useBoolean(false)
  const fromYouEcchiComponents = useHopeToDoComponents(
    input?.hopeToEcchiFromYouStates ?? defaultWritingLoveLetterResult.hopeToEcchiFromYouStates,
  )
  const [fromYouEcchiIsVisible, { toggle: toggleFromYouEcchiIsVisible }] = useBoolean(false)

  const otherNotes = useInput(input?.otherNotes)

  // output
  const getResult = () => ({
    name: name.value,
    gender: gender.value,
    role: role,
    startTimeToIn: startTimeToIn.value,
    endTimeToIn: endTimeToIn.value,
    yourIconFilePath: yourIconFilePath,
    hopeToDoWithYou: withYouComponents,
    hopeToDoToYou: toYouComponents,
    hopeToDoFromYou: fromYouComponents,
    hopeToEcchiToYou: toYouEcchiComponents,
    hopeToEcchiFromYou: fromYouEcchiComponents,
    otherNotes: otherNotes.value,
  })

  return (
    <div>
      <Head>
        <title>{title} - あなたの情報を入力</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <ToastContainer />

        <p className="font-extrabold text-pink-400 text-lg mt-4 md:text-2xl">
          まずは相手に情報を入力してもらうために
        </p>
        <p className="font-extrabold text-pink-400 text-lg mb-4 md:text-2xl">
          自分の情報を入力してください
        </p>

        <section className="rounded-box">
          <ExapleButton />
        </section>

        <section className="rounded-box mt-6 flex flex-col items-center w-3/4v">
          <SectionTitle>あなたのきほん情報</SectionTitle>
          <label className="mt-4">
            名前
            <input type="text" {...name.eventBind} placeholder="なまえ" className="ml-4" />
          </label>

          <label className="mt-2">
            性別
            <input
              type="text"
              {...gender.eventBind}
              placeholder="女 | 男 | いぬ | ねこ | （自由入力）"
              className="ml-4"
            />
          </label>

          <div className="flex flex-row flex-wrap mt-2">
            <div>あなたは</div>
            <label className="ml-4">
              <input type="radio" value="wife" onChange={setRoleByEvent} checked={isRoleWife()} />妻
            </label>
            <label className="ml-2">
              <input
                type="radio"
                value="husband"
                onChange={setRoleByEvent}
                checked={isRoleHusband()}
              />{' '}
              夫
            </label>
            <label className="ml-2">
              <input
                type="radio"
                value="another"
                onChange={setRoleToAnother}
                checked={isRoleAnother()}
              />
              <input type="text" {...anotherRoleText.eventBind} placeholder="その他（自由入力）" />
            </label>
          </div>

          <div className="flex flex-col my-4">
            <label>
              あなたのアイコン
              <input
                type="file"
                src={yourIconFilePath}
                onChange={setYourIconWithPreviewing}
                className="ml-4 py-2 w-56"
              />
            </label>
            {yourIconFilePath && (
              <div className="w-full flex flex-col items-center">
                <img
                  src={yourIconFilePath}
                  alt="あなたのアイコン"
                  className="w-32 h-auto mt-4 rounded-lg"
                />
              </div>
            )}
          </div>

          <label className="mt-2">
            インしやすい時間
            <input type="time" {...startTimeToIn.eventBind} className="ml-4" />
            {' 〜 '}
            <input type="time" {...endTimeToIn.eventBind} />
          </label>
        </section>

        <HopeToDo
          sectionName={
            <div>
              あなたが相手<span className="text-yellow-400">と</span>したいこと
            </div>
          }
          components={withYouComponents}
          className="mt-6 w-3/4v"
        />

        <HopeToDo
          sectionName={
            <div>
              あなたが相手<span className="text-yellow-400">に</span>したいこと
            </div>
          }
          components={toYouComponents}
          className="mt-6 w-3/4v"
        >
          <HopeToEcchi
            isVisible={toYouEcchiIsVisible}
            toggleIsVisible={toggleToYouEcchiIsVisible}
            components={toYouEcchiComponents}
          />
        </HopeToDo>

        <HopeToDo
          sectionName={
            <div>
              あなたが相手<span className="text-yellow-400">から</span>されたいこと
            </div>
          }
          components={fromYouComponents}
          className="mt-6 w-3/4v"
        >
          <HopeToEcchi
            isVisible={fromYouEcchiIsVisible}
            toggleIsVisible={toggleFromYouEcchiIsVisible}
            components={fromYouEcchiComponents}
          />
        </HopeToDo>

        <section className="rounded-box mt-6 flex flex-col items-center w-3/4v">
          <SectionTitle>その他</SectionTitle>
          <textarea
            {...otherNotes.eventBind}
            placeholder="相手に伝えたいことなど♡"
            className="w-full mt-4"
          />
        </section>

        {/* 
        <Link href={`confirm-loveletter?${makeResultToQuery(getResult())}`}>
          <a className="btn mt-6 shadow-lg">♡できばえを確認♡</a>
        </Link>
          */}
      </main>
    </div>
  )

  function previewYourIconWith(
    dispatch: Dispatch<string>,
  ): (event: ChangeEvent<HTMLInputElement>) => void {
    return () => {
      const target = event?.target as { files?: Array<Blob> } | null
      const uploaded = (target?.files ?? [])[0]
      if (uploaded === undefined) {
        // If no files selected.
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const file = e.target?.result
        if (typeof file !== 'string') {
          throw new Error(`Fatal error! unknown file type. file: ${file}`)
        }
        dispatch(file)
      }

      reader.readAsDataURL(uploaded)
    }
  }

  function makeResultToQuery(result: WritingLoveLetterResult): string {
    return encodeURI(`data=${JSON.stringify(result)}`)
  }

  /**
   * Apply a previous props if exists on URL query.
   */
  function getPreviousPropsIfExists(
    query: Record<string, string | Array<string> | undefined>,
  ): LoveLetterProps | null | Error {
    if (query.debug) {
      return debugWritingLoveLetterResult
    }

    if (isEmpty(query)) {
      return null
    }

    // If valid parameters input.
    const parsingPrevious = loveLetterProps.safeParse(query)
    if (!parsingPrevious.success) {
      return new Error('不明なURLクエリが指定されましたん) ><'
    }

    return parsingPrevious.data
  }
}

export default WritingLoveLetter

const ExapleButton: FC = () => {
  const { item, doSwitch } = useSwitch3(0)
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center">
        <FontAwesomeIcon icon={faExclamation} width={10} className="text-pink-200" />
        <p className="ml-2">操作説明</p>
      </div>

      <div className="flex flex-col items-center mt-4">
        <p>↓押して切り替える</p>
        <IconButton text="お試し" current={item} onClick={doSwitch} className="m-2" />
      </div>

      <div className="flex flex-col mt-4">
        <div className="flex flex-row">
          <FontAwesomeIcon icon={faQuestionCircle} width={25} />
          <p className="ml-2">←まだわからない</p>
        </div>

        <div className="flex flex-row mt-2">
          <FontAwesomeIcon icon={faThumbsUp} width={25} />
          <p className="ml-2">←したい</p>
        </div>

        <div className="flex flex-row mt-2">
          <FontAwesomeIcon icon={faTimesCircle} width={25} />
          <p className="ml-2">←したくない</p>
        </div>
      </div>
    </div>
  )
}

type HopeToEcchiProps = HopeToDoProps & {
  isVisible: boolean
  toggleIsVisible: () => void
}

const HopeToEcchi: FC<HopeToEcchiProps> = ({ isVisible, toggleIsVisible, components }) => (
  <>
    <label>
      <input type="checkbox" checked={isVisible} onChange={toggleIsVisible} />
      えっちな項目を表示する
    </label>
    {isVisible && <HopeToDo components={components} className="w-full" />}
  </>
)
